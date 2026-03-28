import type { TeamCityClientAdapter } from './client-adapter';
export interface BuildStepManagerOptions {
    configId: string;
}
export interface BuildStepCreateOptions {
    configId: string;
    name: string;
    type: RunnerType;
    enabled?: boolean;
    properties?: Record<string, string>;
    parameters?: Record<string, string>;
}
export interface BuildStepUpdateOptions {
    configId: string;
    stepId: string;
    name?: string;
    enabled?: boolean;
    properties?: Record<string, string>;
    parameters?: Record<string, string>;
}
export interface BuildStepDeleteOptions {
    configId: string;
    stepId: string;
}
export interface BuildStepReorderOptions {
    configId: string;
    stepOrder: string[];
}
export type RunnerType = 'simpleRunner' | 'Maven2' | 'gradle-runner' | 'MSBuild' | 'dotnet' | 'nodejs-runner' | 'Docker' | 'python' | 'cargo' | 'kotlinScript';
export interface BuildStep {
    id: string;
    name: string;
    type: RunnerType;
    enabled: boolean;
    parameters: Record<string, string>;
    executionMode?: 'default' | 'always' | 'onlyIfAllPreviousPassed';
}
export interface BuildStepListResult {
    success: boolean;
    steps: BuildStep[];
    configId: string;
}
export interface BuildStepOperationResult {
    success: boolean;
    step?: BuildStep;
    steps?: BuildStep[];
    message?: string;
}
export declare class BuildStepManager {
    private readonly client;
    constructor(client: TeamCityClientAdapter);
    listBuildSteps(options: BuildStepManagerOptions): Promise<BuildStepListResult>;
    createBuildStep(options: BuildStepCreateOptions): Promise<BuildStepOperationResult>;
    updateBuildStep(options: BuildStepUpdateOptions): Promise<BuildStepOperationResult>;
    deleteBuildStep(options: BuildStepDeleteOptions): Promise<BuildStepOperationResult>;
    reorderBuildSteps(options: BuildStepReorderOptions): Promise<BuildStepOperationResult>;
    private ensureStepListResponse;
    private parseStepList;
    private parseStep;
    private parseRunnerProperties;
    private isValidRunnerType;
    private validateRunnerParameters;
    private buildStepData;
    private handleError;
}
//# sourceMappingURL=build-step-manager.d.ts.map