import type { TeamCityUnifiedClient } from './types/client';
export interface BuildConfigNavigatorParams {
    projectId?: string;
    projectIds?: string[];
    namePattern?: string;
    includeVcsRoots?: boolean;
    includeParameters?: boolean;
    includeProjectHierarchy?: boolean;
    viewMode?: 'list' | 'project-grouped';
    vcsRootFilter?: {
        url?: string;
        branch?: string;
        vcsName?: string;
    };
    statusFilter?: {
        lastBuildStatus?: 'SUCCESS' | 'FAILURE' | 'ERROR' | 'UNKNOWN';
        paused?: boolean;
        hasRecentActivity?: boolean;
        activeSince?: Date;
    };
    sortBy?: 'name' | 'project' | 'lastModified';
    sortOrder?: 'asc' | 'desc';
    pagination?: {
        limit?: number;
        offset?: number;
    };
}
export interface BuildConfig {
    id: string;
    name: string;
    projectId: string;
    projectName: string;
    description?: string;
    href?: string;
    webUrl?: string;
    vcsRoots?: VcsRoot[];
    parameters?: Record<string, string>;
    projectHierarchy?: ProjectInfo[];
    lastBuildDate?: string;
    lastBuildStatus?: string;
    paused?: boolean;
}
export interface VcsRoot {
    id: string;
    name: string;
    vcsName: string;
    url?: string;
    branch?: string;
}
export interface ProjectInfo {
    id: string;
    name: string;
}
export interface ProjectGroup {
    projectId: string;
    projectName: string;
    buildConfigs: BuildConfig[];
}
export interface BuildConfigNavigatorResult {
    buildConfigs: BuildConfig[];
    totalCount: number;
    hasMore: boolean;
    viewMode: 'list' | 'project-grouped';
    groupedByProject?: Record<string, ProjectGroup>;
}
export declare class BuildConfigNavigator {
    private client;
    private cache;
    private readonly cacheTtlMs;
    private readonly maxCacheSize;
    constructor(client: TeamCityUnifiedClient);
    listBuildConfigs(params?: BuildConfigNavigatorParams): Promise<BuildConfigNavigatorResult>;
    private buildLocator;
    private buildFields;
    private processBuildConfigs;
    private matchesPattern;
    private matchesVcsRootFilter;
    private matchesStatusFilter;
    private sortBuildConfigs;
    private extractVcsRoots;
    private extractParameters;
    private extractProjectHierarchy;
    private groupBuildConfigsByProject;
    private calculateHasMore;
    private transformError;
    private generateCacheKey;
    private cacheResult;
}
//# sourceMappingURL=build-config-navigator.d.ts.map