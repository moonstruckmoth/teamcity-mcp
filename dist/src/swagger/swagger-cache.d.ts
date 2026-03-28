import type { SwaggerSpec } from './swagger-fetcher';
export interface SwaggerCacheConfig {
    cacheDir?: string;
    ttl?: number;
}
export declare class SwaggerCache {
    private cacheDir;
    private ttl;
    constructor(config?: SwaggerCacheConfig);
    get(key: string): Promise<SwaggerSpec | null>;
    set(key: string, spec: SwaggerSpec): Promise<void>;
    clear(key?: string): Promise<void>;
    isValid(key: string): Promise<boolean>;
    getStats(): Promise<{
        size: number;
        files: number;
        oldestFile?: Date;
        newestFile?: Date;
    }>;
    private getCacheFilePath;
    private generateHash;
}
//# sourceMappingURL=swagger-cache.d.ts.map