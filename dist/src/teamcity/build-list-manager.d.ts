import { type BuildStatus } from './build-query-builder';
import type { TeamCityUnifiedClient } from './types/client';
export interface BuildListParams {
    project?: string;
    buildType?: string;
    status?: BuildStatus;
    branch?: string;
    tag?: string;
    sinceDate?: string;
    untilDate?: string;
    sinceBuild?: number;
    running?: boolean;
    canceled?: boolean;
    personal?: boolean;
    failedToStart?: boolean;
    limit?: number;
    offset?: number;
    forceRefresh?: boolean;
    includeTotalCount?: boolean;
}
export interface BuildInfo {
    id: number;
    buildTypeId: string;
    number: string;
    status: string;
    state: string;
    branchName?: string;
    startDate?: string;
    finishDate?: string;
    queuedDate?: string;
    statusText: string;
    webUrl: string;
}
export interface BuildListResult {
    builds: BuildInfo[];
    metadata: {
        count: number;
        offset: number;
        limit: number;
        hasMore: boolean;
        totalCount?: number;
    };
}
export declare class BuildListManager {
    private client;
    private cache;
    private static readonly cacheTtlMs;
    private static readonly defaultLimit;
    private static readonly maxLimit;
    private static readonly fields;
    constructor(client: TeamCityUnifiedClient);
    listBuilds(params: BuildListParams): Promise<BuildListResult>;
    private buildLocator;
    private parseBuilds;
    private ensureBuildListResponse;
    private hasMoreResults;
    private getTotalCount;
    private extractCount;
    private getCacheKey;
    private getFromCache;
    private cacheResult;
    private cleanCache;
}
//# sourceMappingURL=build-list-manager.d.ts.map