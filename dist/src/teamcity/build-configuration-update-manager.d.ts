import type { AxiosInstance } from 'axios';
import type { TeamCityUnifiedClient } from './types/client';
export declare const setArtifactRulesWithFallback: (http: AxiosInstance, buildTypeId: string, artifactRules: string) => Promise<void>;
export interface UpdateOptions {
    name?: string;
    description?: string;
    buildNumberFormat?: string;
    artifactRules?: string;
    parameters?: Record<string, string>;
    removeParameters?: string[];
    agentRequirements?: {
        poolId?: string;
        requirements?: Record<string, string>;
    };
    buildOptions?: {
        cleanBuild?: boolean;
        executionTimeout?: number;
        checkoutDirectory?: string;
    };
}
export interface BuildConfiguration {
    id: string;
    name: string;
    description?: string;
    projectId: string;
    buildNumberFormat?: string;
    artifactRules?: string;
    parameters?: Record<string, string>;
    agentRequirements?: {
        requirement?: Array<{
            id?: string;
            type: string;
            properties?: {
                property?: Array<{
                    name: string;
                    value: string;
                }>;
            };
        }>;
    };
    buildOptions?: {
        cleanBuild?: boolean;
        executionTimeout?: number;
        checkoutDirectory?: string;
    };
    settings?: {
        property?: Array<{
            name: string;
            value: string;
        }>;
    };
}
export interface ChangeLog {
    [key: string]: {
        before?: unknown;
        after?: unknown;
    } | {
        added?: Record<string, unknown>;
        updated?: Record<string, {
            before: unknown;
            after: unknown;
        }>;
        removed?: string[];
    };
}
export declare class BuildConfigurationUpdateManager {
    private client;
    constructor(client: TeamCityUnifiedClient);
    retrieveConfiguration(configId: string): Promise<BuildConfiguration | null>;
    validateUpdates(currentConfig: BuildConfiguration, updates: UpdateOptions): Promise<boolean>;
    applyUpdates(currentConfig: BuildConfiguration, updates: UpdateOptions): Promise<BuildConfiguration>;
    generateChangeLog(currentConfig: BuildConfiguration, updates: UpdateOptions): ChangeLog;
    rollbackChanges(configId: string, originalConfig: BuildConfiguration): Promise<void>;
    private isValidParameterName;
    private isValidBuildNumberFormat;
    private isValidArtifactRules;
}
//# sourceMappingURL=build-configuration-update-manager.d.ts.map