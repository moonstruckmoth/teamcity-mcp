import { type BuildTypeDependency, type BuildTypeFeature, type BuildTypeStep, type BuildTypeTrigger } from './types/api-responses';
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
export declare class BuildConfigurationCloneManager {
    private client;
    constructor(client: TeamCityUnifiedClient);
    retrieveConfiguration(configId: string): Promise<BuildConfiguration | null>;
    validateTargetProject(projectId: string): Promise<{
        id: string;
        name: string;
    } | null>;
    handleVcsRoot(vcsRootId: string, handling: 'clone' | 'reuse', targetProjectId: string): Promise<{
        id: string;
        name: string;
    }>;
    applyParameterOverrides(sourceParameters: Record<string, string>, overrides: Record<string, string>): Promise<Record<string, string>>;
    cloneConfiguration(source: BuildConfiguration, options: CloneOptions): Promise<BuildConfiguration>;
    private generateBuildConfigId;
    private isValidParameterName;
}
//# sourceMappingURL=build-configuration-clone-manager.d.ts.map