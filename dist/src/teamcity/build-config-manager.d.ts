import type { Logger } from 'winston';
import type { TeamCityUnifiedClient } from './types/client';
export interface ManagedBuildConfiguration {
    id: string;
    name: string;
    projectId: string;
    projectName: string;
    description?: string;
    webUrl?: string;
    paused: boolean;
    templateFlag: boolean;
    templateId?: string;
    parameters?: Record<string, string>;
    vcsRootIds?: string[];
    buildSteps?: number;
    triggers?: number;
    dependencies?: {
        snapshot: string[];
        artifact: string[];
    };
}
export interface BuildConfigurationFilters {
    projectId?: string;
    projectIds?: string[];
    namePattern?: string;
    templateFlag?: boolean;
    paused?: boolean;
    tags?: string[];
    hasVcsRoot?: boolean;
    hasTriggers?: boolean;
}
export interface BuildConfigurationSort {
    by?: 'name' | 'projectName' | 'id' | 'created' | 'modified';
    order?: 'asc' | 'desc';
}
export interface BuildConfigurationPagination {
    page?: number;
    pageSize?: number;
}
export interface PaginatedBuildConfigurations {
    configurations: ManagedBuildConfiguration[];
    pagination: {
        page: number;
        pageSize: number;
        totalCount: number;
        totalPages: number;
        hasNext: boolean;
        hasPrevious: boolean;
    };
}
export declare class BuildConfigManager {
    private readonly client;
    private readonly logger;
    constructor(client: TeamCityUnifiedClient, logger: Logger);
    listConfigurations(options?: {
        filters?: BuildConfigurationFilters;
        sort?: BuildConfigurationSort;
        pagination?: BuildConfigurationPagination;
        includeDetails?: boolean;
    }): Promise<PaginatedBuildConfigurations>;
    getProjectConfigurations(projectId: string, includeSubprojects?: boolean): Promise<ManagedBuildConfiguration[]>;
    getTemplateHierarchy(templateId: string): Promise<{
        template: ManagedBuildConfiguration;
        inheritors: ManagedBuildConfiguration[];
    }>;
    private buildLocator;
    private buildFieldsSpec;
    private normalizeBuildTypes;
    private normalizeBuildType;
    private applyFilters;
    private sortConfigurations;
    private paginate;
    private getSubprojectIds;
}
//# sourceMappingURL=build-config-manager.d.ts.map