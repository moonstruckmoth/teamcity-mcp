export interface PaginationParams {
    count?: number;
    start?: number;
}
export interface PaginatedResponse<T> {
    items: T[];
    count: number;
    total?: number;
    nextHref?: string;
    prevHref?: string;
}
export interface PaginationOptions {
    pageSize?: number;
    maxPages?: number;
    fetchAll?: boolean;
}
export declare class PaginatedIterator<T> {
    private currentPage;
    private hasMore;
    private readonly pageSize;
    private readonly maxPages?;
    private readonly fetchFn;
    constructor(fetchFn: (params: PaginationParams) => Promise<PaginatedResponse<T>>, options?: PaginationOptions);
    [Symbol.asyncIterator](): AsyncIterator<T>;
    toArray(): Promise<T[]>;
    getPage(pageNumber: number): Promise<T[]>;
}
export declare function createPaginatedFetcher<T>(baseFetch: (params: PaginationParams) => Promise<unknown>, extractItems: (response: unknown) => T[], extractTotal?: (response: unknown) => number | undefined): (params: PaginationParams) => Promise<PaginatedResponse<T>>;
export declare function fetchAllPages<T>(fetchFn: (params: PaginationParams) => Promise<PaginatedResponse<T>>, options?: PaginationOptions): Promise<T[]>;
export declare function parseLocator(locator: string): PaginationParams;
export declare function buildLocator(params: PaginationParams): string;
//# sourceMappingURL=pagination.d.ts.map