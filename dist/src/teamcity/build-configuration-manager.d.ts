import type { TeamCityClientAdapter } from './client-adapter';
export interface BuildConfigData {
    projectId: string;
    name: string;
    description?: string;
    templateId?: string;
    vcsRootId?: string;
    steps?: BuildStep[];
    triggers?: BuildTrigger[];
    parameters?: Record<string, string>;
}
export interface VcsRootData {
    projectId: string;
    name: string;
    url: string;
    branch?: string;
    type?: 'git' | 'svn' | 'perforce';
    authentication?: {
        type?: 'password' | 'token' | 'ssh';
        username?: string;
        password?: string;
        privateKey?: string;
    };
}
export interface BuildStep {
    type: string;
    name: string;
    script?: string;
    goals?: string;
    tasks?: string;
    dockerfile?: string;
    workingDir?: string;
    arguments?: string;
}
export interface BuildTrigger {
    type: string;
    rules?: string;
    schedule?: string;
    buildType?: string;
    branchFilter?: string;
}
export declare class BuildConfigurationManager {
    private client;
    constructor(client: TeamCityClientAdapter);
    validateProject(projectId: string): Promise<{
        id: string;
        name: string;
    } | null>;
    createVcsRoot(data: VcsRootData): Promise<{
        id: string;
    }>;
    transformBuildSteps(steps: BuildStep[]): Array<{
        id: string;
        name: string;
        type: string;
        properties: {
            property: Array<{
                name: string;
                value: string;
            }>;
        };
    }>;
    transformTriggers(triggers: BuildTrigger[]): Array<{
        id: string;
        type: string;
        properties: {
            property: Array<{
                name: string;
                value: string;
            }>;
        };
    }>;
    createConfiguration(data: BuildConfigData): Promise<{
        id: string;
        name: string;
        projectId: string;
        url: string;
        description?: string;
    }>;
    private generateBuildConfigId;
}
//# sourceMappingURL=build-configuration-manager.d.ts.map