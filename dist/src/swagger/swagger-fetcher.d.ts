export interface SwaggerFetcherConfig {
    baseUrl: string;
    token: string;
    timeout?: number;
}
export interface SwaggerSpec {
    swagger?: string;
    openapi?: string;
    info: {
        version: string;
        title: string;
        description?: string;
    };
    paths: Record<string, unknown>;
    [key: string]: unknown;
}
export declare class SwaggerFetcher {
    private client;
    constructor(config: SwaggerFetcherConfig);
    fetchSpec(): Promise<SwaggerSpec>;
    testConnection(): Promise<boolean>;
    getServerVersion(): Promise<string | null>;
}
//# sourceMappingURL=swagger-fetcher.d.ts.map