import type { TeamCityUnifiedClient } from '../teamcity/types/client';
import type { ProjectInfo, ProjectListParams, ProjectListResult } from '../types/project';
export type { ProjectListParams, ProjectInfo };
export declare class ProjectListManager {
    private client;
    constructor(client: TeamCityUnifiedClient);
    listProjects(params?: ProjectListParams): Promise<ProjectListResult>;
    private buildLocator;
    private buildFieldsString;
    private transformProjects;
    private transformProject;
    private getBuildTypesCount;
    private getSubprojectsCount;
    private calculateDepth;
    private hasMoreResults;
    private handleApiError;
    private isAxiosError;
}
//# sourceMappingURL=project-list-manager.d.ts.map