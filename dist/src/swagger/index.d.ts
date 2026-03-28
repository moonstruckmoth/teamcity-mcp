import { type SwaggerSpec } from './swagger-fetcher';
export * from './swagger-fetcher';
export * from './swagger-validator';
export * from './swagger-cache';
export interface SwaggerManagerConfig {
    baseUrl?: string;
    token?: string;
    cacheDir?: string;
    cacheTTL?: number;
    forceRefresh?: boolean;
}
export declare class SwaggerManager {
    private fetcher;
    private validator;
    private cache;
    private config;
    private initialized;
    constructor(config?: SwaggerManagerConfig);
    private initialize;
    getSpec(): Promise<SwaggerSpec>;
    validateSpec(spec?: SwaggerSpec): Promise<{
        isValid: boolean;
        version?: string;
        teamCityVersion?: string;
        errors?: string[];
        warnings?: string[];
    }>;
    getServerInfo(): Promise<{
        version: string | null;
        connected: boolean;
        specVersion?: string;
    }>;
    clearCache(): Promise<void>;
    getCacheStats(): Promise<{
        size: number;
        files: number;
        oldestFile?: Date;
        newestFile?: Date;
    }>;
    private getCacheKey;
}
export declare function getSwaggerManager(config?: SwaggerManagerConfig): SwaggerManager;
//# sourceMappingURL=index.d.ts.map