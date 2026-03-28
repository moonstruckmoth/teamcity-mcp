import type { TeamCityClientAdapter } from './client-adapter';
export interface BuildStatusOptions {
    buildId?: string;
    buildNumber?: string;
    buildTypeId?: string;
    branch?: string;
    includeTests?: boolean;
    includeProblems?: boolean;
    forceRefresh?: boolean;
}
export interface BuildStatusResult {
    buildId: string;
    buildNumber?: string;
    buildTypeId?: string;
    state: 'queued' | 'running' | 'finished' | 'failed' | 'canceled';
    status?: 'SUCCESS' | 'FAILURE' | 'ERROR' | 'UNKNOWN';
    statusText?: string;
    percentageComplete: number;
    currentStageText?: string;
    branchName?: string;
    webUrl?: string;
    queuedDate?: Date;
    startDate?: Date;
    finishDate?: Date;
    elapsedSeconds?: number;
    estimatedTotalSeconds?: number;
    estimatedStartTime?: Date;
    queuePosition?: number;
    waitReason?: string;
    failureReason?: string;
    canceledBy?: string;
    canceledDate?: Date;
    testSummary?: TestSummary;
    problems?: BuildProblem[];
}
export interface TestSummary {
    total: number;
    passed: number;
    failed: number;
    ignored: number;
    muted?: number;
    newFailed?: number;
}
export interface BuildProblem {
    type: string;
    identity: string;
    description: string;
}
export declare class BuildStatusManager {
    private client;
    private cache;
    private readonly cacheTtl;
    constructor(client: TeamCityClientAdapter);
    getBuildStatus(options: BuildStatusOptions): Promise<BuildStatusResult>;
    private getBuildStatusFromBuildsEndpoint;
    private getQueuedBuildStatus;
    private handleBuildStatusError;
    getBuildStatusByLocator(locator: string): Promise<BuildStatusResult>;
    clearCache(): void;
    private buildLocator;
    private getFieldSelection;
    private transformBuildResponse;
    private getPercentageComplete;
    private parseDate;
    private getCacheKey;
    private getCachedResult;
    private setCachedResult;
}
//# sourceMappingURL=build-status-manager.d.ts.map