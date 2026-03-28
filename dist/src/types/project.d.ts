export interface ProjectMetadata {
    id: string;
    name: string;
    description?: string;
    href: string;
    webUrl: string;
    parentProjectId: string;
    archived: boolean;
    buildTypesCount?: number;
    subprojectsCount?: number;
    depth?: number;
}
export interface ProjectHierarchy {
    parentProject?: {
        id: string;
        name: string;
        href?: string;
    };
    ancestorProjects?: Array<{
        id: string;
        name: string;
        href?: string;
    }>;
    childProjects?: Array<{
        id: string;
        name: string;
        href?: string;
        buildTypesCount?: number;
    }>;
}
export interface ProjectInfo extends ProjectMetadata, ProjectHierarchy {
    features?: Array<{
        type: string;
        properties?: Record<string, string>;
    }>;
    parameters?: Record<string, string>;
}
export interface ProjectListParams {
    name?: string;
    archived?: boolean;
    parentProjectId?: string;
    includeHierarchy?: boolean;
    limit?: number;
    offset?: number;
}
export interface ProjectListResult {
    projects: ProjectInfo[];
    metadata: {
        count: number;
        offset: number;
        limit: number;
        hasMore: boolean;
        totalCount?: number;
    };
}
//# sourceMappingURL=project.d.ts.map