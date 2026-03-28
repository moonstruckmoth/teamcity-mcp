import type { Logger } from 'winston';
export interface BranchInfo {
    name: string;
    displayName: string;
    isDefault: boolean;
    isActive: boolean;
    buildCount: number;
    lastBuild?: {
        id: string;
        number: string;
        status: string;
        date: Date | string;
        webUrl?: string;
    };
    firstSeenDate?: Date | string;
    lastActivityDate?: Date | string;
    vcsRoot?: {
        id: string;
        name: string;
        url: string;
    };
}
export interface BranchFilterOptions {
    namePattern?: string;
    caseInsensitive?: boolean;
    onlyActive?: boolean;
    onlyDefault?: boolean;
    activeSince?: Date;
    activeBefore?: Date;
    minBuildCount?: number;
    lastBuildStatus?: 'SUCCESS' | 'FAILURE' | 'ERROR' | 'UNKNOWN';
}
export interface BranchSortOptions {
    sortBy?: 'name' | 'activity' | 'buildCount' | 'status';
    sortOrder?: 'asc' | 'desc';
    defaultFirst?: boolean;
}
export interface BranchPaginationOptions {
    page?: number;
    pageSize?: number;
    prioritizeActive?: boolean;
}
export interface PaginatedBranches {
    branches: BranchInfo[];
    totalCount: number;
    currentPage: number;
    totalPages: number;
    hasMore: boolean;
}
export declare class BranchFilteringService {
    private readonly logger;
    private readonly defaultPageSize;
    constructor(logger: Logger);
    filterBranches(branches: BranchInfo[], options: BranchFilterOptions): BranchInfo[];
    sortBranches(branches: BranchInfo[], sortBy?: BranchSortOptions['sortBy'], sortOrder?: BranchSortOptions['sortOrder'], defaultFirst?: boolean): BranchInfo[];
    paginateBranches(branches: BranchInfo[], options: BranchPaginationOptions): PaginatedBranches;
    applyFiltersAndPagination(branches: BranchInfo[], filterOptions: BranchFilterOptions, sortOptions: BranchSortOptions, paginationOptions: BranchPaginationOptions): PaginatedBranches;
    private filterByNamePattern;
    private prioritizeBranches;
    private toDate;
}
//# sourceMappingURL=branch-filtering-service.d.ts.map