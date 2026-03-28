import type { TeamCityClientAdapter } from './client-adapter';
export type TriggerType = 'vcsTrigger' | 'schedulingTrigger' | 'buildDependencyTrigger';
export interface BuildTrigger {
    id: string;
    type: TriggerType;
    enabled: boolean;
    properties: Record<string, string>;
    dependsOn?: string | string[];
    afterSuccessfulBuildOnly?: boolean;
    artifactRules?: string;
    dependOnStartedBuild?: boolean;
    promoteArtifacts?: boolean;
}
export interface VcsTriggerProperties {
    branchFilter?: string;
    quietPeriodMode?: 'DO_NOT_USE' | 'USE_DEFAULT' | 'USE_CUSTOM';
    quietPeriod?: number;
    triggerRules?: string;
    enableQueueOptimization?: boolean;
    vcsRootId?: string;
}
export interface ScheduleTriggerProperties {
    schedulingPolicy: string;
    timezone?: string;
    triggerBuildWithPendingChangesOnly?: boolean;
    promoteWatchedBuild?: boolean;
    buildParameters?: Record<string, string>;
}
export interface DependencyTriggerProperties {
    dependsOn: string | string[];
    afterSuccessfulBuildOnly?: boolean;
    branchFilter?: string;
    artifactRules?: string;
    artifactDependencies?: string[];
    dependOnStartedBuild?: boolean;
    promoteArtifacts?: boolean;
}
export interface ListTriggersOptions {
    configId: string;
    fields?: string;
}
export interface CreateTriggerOptions {
    configId: string;
    type: TriggerType;
    enabled?: boolean;
    properties: VcsTriggerProperties | ScheduleTriggerProperties | DependencyTriggerProperties;
}
export interface UpdateTriggerOptions {
    configId: string;
    triggerId: string;
    enabled?: boolean;
    properties?: Partial<VcsTriggerProperties | ScheduleTriggerProperties | DependencyTriggerProperties>;
}
export interface DeleteTriggerOptions {
    configId: string;
    triggerId: string;
}
export interface ValidateTriggerOptions {
    type: TriggerType;
    properties: VcsTriggerProperties | ScheduleTriggerProperties | DependencyTriggerProperties;
}
export interface ListTriggersResult {
    success: boolean;
    triggers: BuildTrigger[];
    configId: string;
}
export interface TriggerOperationResult {
    success: boolean;
    trigger?: BuildTrigger;
    message?: string;
}
export interface ValidateTriggerResult {
    valid: boolean;
    errors: string[];
    warnings?: string[];
}
export declare class BuildTriggerManager {
    private readonly client;
    constructor(client: TeamCityClientAdapter);
    listTriggers(options: ListTriggersOptions): Promise<ListTriggersResult>;
    createTrigger(options: CreateTriggerOptions): Promise<TriggerOperationResult>;
    updateTrigger(options: UpdateTriggerOptions): Promise<TriggerOperationResult>;
    deleteTrigger(options: DeleteTriggerOptions): Promise<TriggerOperationResult>;
    validateTrigger(options: ValidateTriggerOptions): ValidateTriggerResult;
    private parseTriggerList;
    private parseTrigger;
    private buildTriggerPayload;
    private propertiesToRecord;
    private validateVcsRoot;
    private checkCircularDependency;
    private isValidBranchFilter;
    private isValidArtifactRules;
    private isValidPathPattern;
    private isValidPathFilterRules;
    private isValidSchedule;
    private isValidCronField;
    private isValidTimezone;
    calculateNextRunTime(schedule: string, timezone?: string): Date;
    private calculateNextCronRun;
    private isNotFoundError;
    validateDependencyChain(sourceConfig: string, targetConfig: string, visited?: Set<string>): Promise<{
        hasCircularDependency: boolean;
        chain: string[];
    }>;
    private handleApiError;
    private extractErrorResponse;
}
//# sourceMappingURL=build-trigger-manager.d.ts.map