import type { TeamCityClientAdapter } from '../teamcity/client-adapter';
export interface ProjectNavigatorParams {
    mode?: 'list' | 'hierarchy' | 'ancestors' | 'descendants';
    projectId?: string;
    rootProjectId?: string;
    filters?: {
        namePattern?: string;
        archived?: boolean;
        hasBuilds?: boolean;
        parentProjectId?: string;
        maxDepth?: number;
    };
    pagination?: {
        page?: number;
        pageSize?: number;
    };
    sort?: {
        by?: 'name' | 'id' | 'level';
        order?: 'asc' | 'desc';
    };
    includeStatistics?: boolean;
    maxDepth?: number;
}
export interface ProjectNavigatorResult {
    success: boolean;
    data?: {
        mode: string;
        projects?: Array<{
            id: string;
            name: string;
            description?: string;
            parentProjectId?: string;
            parentProjectName?: string;
            archived: boolean;
            level: number;
            href?: string;
            webUrl?: string;
            statistics?: {
                buildConfigurationCount?: number;
                vcsRootCount?: number;
                subprojectCount?: number;
                lastActivity?: string;
            };
        }>;
        hierarchy?: HierarchyNode;
        ancestors?: Array<ProjectInfo>;
        descendants?: Array<ProjectInfo>;
        totalCount?: number;
        page?: number;
        pageSize?: number;
        hasMore?: boolean;
        maxDepthReached?: boolean;
        executionTime?: number;
        cached?: boolean;
    };
    error?: string;
}
interface HierarchyNode {
    id: string;
    name: string;
    description?: string;
    archived: boolean;
    children?: HierarchyNode[];
    statistics?: ProjectStatistics;
}
interface ProjectInfo {
    id: string;
    name: string;
    description?: string;
    archived?: boolean;
    level?: number;
    parentProjectId?: string;
}
interface ProjectStatistics {
    buildConfigurationCount?: number;
    vcsRootCount?: number;
    subprojectCount?: number;
    lastActivity?: string;
}
export declare class ProjectNavigator {
    private readonly client;
    private cache;
    private readonly cacheTtl;
    constructor(client: TeamCityClientAdapter);
    listProjects(params?: ProjectNavigatorParams): Promise<ProjectNavigatorResult>;
    private getList;
    private getHierarchy;
    private getAncestors;
    private getDescendants;
    private transformHierarchyNode;
    private transformToProjectInfo;
    private checkMaxDepthReached;
    private validateParams;
    private getCacheKey;
    private getCachedResult;
    private setCachedResult;
    private sortProjects;
    private formatError;
}
export {};
//# sourceMappingURL=project-navigator.d.ts.map