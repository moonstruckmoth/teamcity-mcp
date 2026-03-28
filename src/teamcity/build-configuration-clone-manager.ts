/**
 * BuildConfigurationCloneManager - Manages cloning of build configurations
 */
import { getTeamCityUrl } from '@/config';
import { debug, info, error as logError } from '@/utils/logger';

import {
  type BuildTypeData,
  type BuildTypeDependency,
  type BuildTypeFeature,
  type BuildTypeProperty,
  type BuildTypeStep,
  type BuildTypeTrigger,
  type VcsRootData,
  isBuildTypeData,
  isVcsRootsResponse,
} from './types/api-responses';
import type { TeamCityUnifiedClient } from './types/client';

export interface CloneOptions {
  name: string;
  targetProjectId: string;
  description?: string;
  vcsRootId?: string;
  parameters?: Record<string, string>;
  copyBuildCounter?: boolean;
  id?: string;
}

export interface BuildConfiguration {
  id: string;
  name: string;
  projectId: string;
  description?: string;
  vcsRootId?: string;
  parameters?: Record<string, string>;
  templateId?: string;
  steps?: BuildTypeStep[];
  triggers?: BuildTypeTrigger[];
  features?: BuildTypeFeature[];
  artifactDependencies?: BuildTypeDependency[];
  snapshotDependencies?: BuildTypeDependency[];
  buildNumberCounter?: number;
  buildNumberFormat?: string;
  url?: string;
}

export class BuildConfigurationCloneManager {
  private client: TeamCityUnifiedClient;

  constructor(client: TeamCityUnifiedClient) {
    this.client = client;
  }

  /**
   * Retrieve complete build configuration from TeamCity
   */
  async retrieveConfiguration(configId: string): Promise<BuildConfiguration | null> {
    try {
      const response = await this.client.modules.buildTypes.getBuildType(
        configId,
        '$long,steps($long),triggers($long),features($long),artifact-dependencies($long),snapshot-dependencies($long),parameters($long),vcs-root-entries($long)'
      );

      if (response.data == null || !isBuildTypeData(response.data)) {
        return null;
      }

      const config = response.data as BuildTypeData;

      // Extract VCS root ID if present
      let vcsRootId: string | undefined;
      const vcsRootEntries = config['vcs-root-entries'];
      if (vcsRootEntries?.['vcs-root-entry'] && vcsRootEntries['vcs-root-entry'].length > 0) {
        const firstEntry = vcsRootEntries['vcs-root-entry'][0];
        if (firstEntry?.['vcs-root']?.id) {
          vcsRootId = firstEntry['vcs-root'].id;
        }
      }

      // Extract parameters
      const parameters: Record<string, string> = {};
      if (config.parameters?.property) {
        for (const param of config.parameters.property) {
          if (param.name && param.value) {
            parameters[param.name] = param.value;
          }
        }
      }

      const cfgId = config.id;
      const cfgName = config.name;
      if (!cfgId || !cfgName) {
        throw new Error('Source configuration missing id or name');
      }
      return {
        id: cfgId,
        name: cfgName,
        projectId: config.projectId ?? config.project?.id ?? '',
        description: config.description,
        vcsRootId,
        parameters,
        templateId: config.templates?.buildType?.[0]?.id,
        steps: config.steps?.step,
        triggers: config.triggers?.trigger,
        features: config.features?.feature,
        artifactDependencies: config['artifact-dependencies']?.['artifact-dependency'],
        snapshotDependencies: config['snapshot-dependencies']?.['snapshot-dependency'],
        buildNumberCounter: (() => {
          const counterProp = config.settings?.property?.find(
            (p: BuildTypeProperty) => p.name === 'buildNumberCounter'
          );
          return counterProp?.value ? parseInt(counterProp.value, 10) : undefined;
        })(),
        buildNumberFormat: config.settings?.property?.find(
          (p: BuildTypeProperty) => p.name === 'buildNumberPattern'
        )?.value,
      };
    } catch (err) {
      const axiosError = err as { response?: { status?: number } };
      if (axiosError.response?.status === 404) {
        debug('Build configuration not found', { configId });
        return null;
      }
      if (axiosError.response?.status === 403) {
        throw new Error('Permission denied: No access to source configuration', { cause: err });
      }
      throw err;
    }
  }

  /**
   * Validate target project exists and user has permissions
   */
  async validateTargetProject(projectId: string): Promise<{ id: string; name: string } | null> {
    try {
      const response = await this.client.modules.projects.getProject(projectId, '$short');

      const id = response.data?.id;
      const name = response.data?.name;
      if (id && name) {
        return { id, name };
      }
      return null;
    } catch (err) {
      const axiosError = err as { response?: { status?: number } };
      if (axiosError.response?.status === 404) {
        debug('Target project not found', { projectId });
        return null;
      }
      if (axiosError.response?.status === 403) {
        debug('No permission to access target project', { projectId });
        return null;
      }
      throw err;
    }
  }

  /**
   * Handle VCS root cloning or reuse
   */
  async handleVcsRoot(
    vcsRootId: string,
    handling: 'clone' | 'reuse',
    targetProjectId: string
  ): Promise<{ id: string; name: string }> {
    if (handling === 'reuse') {
      // Just return the existing VCS root ID
      return { id: vcsRootId, name: 'Reused VCS Root' };
    }

    // Clone the VCS root
    try {
      // Get VCS root details
      const vcsRootsResponse = await this.client.modules.vcsRoots.getAllVcsRoots(
        `id:${vcsRootId}`,
        '$long,vcsRoot($long,properties($long))'
      );

      if (vcsRootsResponse.data == null || !isVcsRootsResponse(vcsRootsResponse.data)) {
        throw new Error('Invalid VCS root response');
      }

      const vcsRoots = vcsRootsResponse.data['vcs-root'] ?? [];
      if (vcsRoots.length === 0) {
        throw new Error('VCS root not found');
      }

      const sourceVcsRoot = vcsRoots[0] as VcsRootData;
      if (sourceVcsRoot == null) {
        throw new Error('VCS root data is invalid');
      }

      const clonedVcsRootName = `${sourceVcsRoot.name}_Clone_${Date.now()}`;

      const clonedVcsRoot = {
        name: clonedVcsRootName,
        vcsName: sourceVcsRoot.vcsName,
        project: {
          id: targetProjectId,
        },
        properties: sourceVcsRoot.properties,
      };

      const createResponse = await this.client.modules.vcsRoots.addVcsRoot(
        undefined,
        clonedVcsRoot as VcsRootData
      );

      const newId = createResponse.data.id;
      const newName = createResponse.data.name;
      if (!newId || !newName) {
        throw new Error('Failed to obtain cloned VCS root id/name');
      }
      return { id: newId, name: newName };
    } catch (err) {
      logError('Failed to clone VCS root', err as Error);
      throw new Error(`Failed to clone VCS root: ${(err as Error).message}`, { cause: err });
    }
  }

  /**
   * Apply parameter overrides to configuration
   */
  async applyParameterOverrides(
    sourceParameters: Record<string, string>,
    overrides: Record<string, string>
  ): Promise<Record<string, string>> {
    const mergedParameters = { ...sourceParameters };

    for (const [key, value] of Object.entries(overrides)) {
      // Validate parameter name
      if (!this.isValidParameterName(key)) {
        throw new Error(`Invalid parameter name: ${key}`);
      }
      mergedParameters[key] = value;
    }

    return mergedParameters;
  }

  /**
   * Clone the build configuration using TeamCity's server-side copy API
   * (sourceBuildTypeLocator + copyAllAssociatedSettings). This ensures locally-defined
   * parameters, steps, triggers, VCS roots and all associated settings are copied
   * correctly by the server rather than being reconstructed client-side.
   */
  async cloneConfiguration(
    source: BuildConfiguration,
    options: CloneOptions
  ): Promise<BuildConfiguration> {
    const configId =
      options.id ?? this.generateBuildConfigId(options.targetProjectId, options.name);

    const teamcityUrl = getTeamCityUrl();
    const axios = this.client.getAxios();

    const body = {
      sourceBuildTypeLocator: `id:${source.id}`,
      copyAllAssociatedSettings: true,
      name: options.name,
      id: configId,
    };

    try {
      const response = await axios.post<{ id?: string; name?: string; projectId?: string; description?: string }>(
        `${teamcityUrl}/app/rest/projects/id:${options.targetProjectId}/buildTypes`,
        body,
        { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }
      );

      const id = response.data.id;
      const name = response.data.name;
      if (!id || !name) {
        throw new Error('Clone response missing id or name');
      }

      const result: BuildConfiguration = {
        id,
        name,
        projectId: response.data.projectId ?? options.targetProjectId,
        description: response.data.description,
        url: `${teamcityUrl}/viewType.html?buildTypeId=${id}`,
      };

      info('Build configuration cloned', {
        id: result.id,
        name: result.name,
        sourceId: source.id,
      });

      return result;
    } catch (err) {
      const error = err as { response?: { status?: number; data?: { message?: string } } };

      if (error.response?.status === 409) {
        throw new Error(`Build configuration already exists with ID: ${configId}`, { cause: err });
      }
      if (error.response?.status === 403) {
        throw new Error('Permission denied: You need project edit permissions', { cause: err });
      }
      if (error.response?.status === 400) {
        const message = error.response?.data?.message ?? 'Invalid configuration';
        throw new Error(`Invalid configuration: ${message}`, { cause: err });
      }

      logError(
        'Failed to clone build configuration',
        error instanceof Error ? error : new Error(String(error))
      );
      throw error;
    }
  }

  /**
   * Generate a unique build configuration ID
   */
  private generateBuildConfigId(projectId: string, name: string): string {
    const cleanName = name
      .replace(/[^a-zA-Z0-9_]/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '');

    return `${projectId}_${cleanName}`;
  }

  /**
   * Validate parameter name according to TeamCity rules
   */
  private isValidParameterName(name: string): boolean {
    // TeamCity parameter names can contain letters, numbers, dots, underscores, and hyphens
    return /^[a-zA-Z0-9._-]+$/.test(name);
  }
}
