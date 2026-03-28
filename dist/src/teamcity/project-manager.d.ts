import type { Logger } from 'winston';
import type { TeamCityUnifiedClient } from './types/client';
export interface ManagedProject {
    id: string;
    name: string;
    parentProjectId?: string;
    description?: string;
    webUrl?: string;
    archived: boolean;
    href?: string;
    buildTypesCount?: number;
    subprojectsCount?: number;
    parameters?: Record<string, string>;
    level?: number;
    path?: string[];
}
export interface ProjectFilters {
    namePattern?: string;
    archived?: boolean;
    parentProjectId?: string;
    hasBuilds?: boolean;
    maxDepth?: number;
}
export interface ProjectSort {
    by?: 'name' | 'id' | 'level';
    order?: 'asc' | 'desc';
}
export interface ProjectPagination {
    page?: number;
    pageSize?: number;
}
export interface PaginatedProjects {
    projects: ManagedProject[];
    pagination: {
        page: number;
        pageSize: number;
        totalCount: number;
        totalPages: number;
        hasNext: boolean;
        hasPrevious: boolean;
    };
}
export interface ProjectHierarchyNode {
    project: ManagedProject;
    children: ProjectHierarchyNode[];
}
export declare class ProjectManager {
    private readonly client;
    private readonly logger;
    private projectCache;
    constructor(client: TeamCityUnifiedClient, logger: Logger);
    listProjects(options?: {
        filters?: ProjectFilters;
        sort?: ProjectSort;
        pagination?: ProjectPagination;
        includeStatistics?: boolean;
    }): Promise<PaginatedProjects>;
    getProjectHierarchy(rootProjectId?: string, maxDepth?: number): Promise<ProjectHierarchyNode>;
    getProjectAncestors(projectId: string): Promise<ManagedProject[]>;
    getProjectDescendants(projectId: string, maxDepth?: number): Promise<ManagedProject[]>;
    private getProject;
    private buildHierarchyNode;
    private collectDescendants;
    private buildLocator;
    private buildFieldsSpec;
    private normalizeProjects;
    private normalizeProject;
    private applyFilters;
    private sortProjects;
    private paginate;
    clearCache(): void;
}
//# sourceMappingURL=project-manager.d.ts.map