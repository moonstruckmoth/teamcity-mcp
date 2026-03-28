import { z } from 'zod';
export declare const EnvSchema: z.ZodObject<{
    NODE_ENV: z.ZodDefault<z.ZodEnum<{
        development: "development";
        production: "production";
        test: "test";
    }>>;
    PORT: z.ZodPipe<z.ZodDefault<z.ZodString>, z.ZodTransform<number, string>>;
    LOG_LEVEL: z.ZodDefault<z.ZodEnum<{
        debug: "debug";
        info: "info";
        warn: "warn";
        error: "error";
    }>>;
    MCP_MODE: z.ZodDefault<z.ZodEnum<{
        dev: "dev";
        full: "full";
    }>>;
    TEAMCITY_URL: z.ZodOptional<z.ZodString>;
    TEAMCITY_TOKEN: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type EnvConfig = z.infer<typeof EnvSchema>;
export interface ServerConfiguration {
    port: number;
    host: string;
    nodeEnv: 'development' | 'production' | 'test';
    logLevel: 'debug' | 'info' | 'warn' | 'error';
    mode: 'dev' | 'full';
    cors: {
        enabled: boolean;
        origins: string[];
    };
    rateLimit: {
        enabled: boolean;
        windowMs: number;
        maxRequests: number;
    };
    timeout: {
        server: number;
        request: number;
    };
}
export interface TeamCityConfiguration {
    url: string;
    token: string;
    apiVersion: string;
    timeout: number;
    retryConfig: {
        maxRetries: number;
        retryDelay: number;
        retryOnStatusCodes: number[];
    };
}
export interface MCPConfiguration {
    name: string;
    version: string;
    protocolVersion: string;
    capabilities: {
        tools: boolean;
        prompts: boolean;
        resources: boolean;
    };
    tools: {
        enabled: string[];
        disabled: string[];
    };
}
export interface ApplicationConfig {
    server: ServerConfiguration;
    teamcity?: TeamCityConfiguration;
    mcp: MCPConfiguration;
    features: {
        realtime: boolean;
        caching: boolean;
        metrics: boolean;
    };
}
export interface ConfigLoaderOptions {
    envPath?: string;
    configPath?: string;
    overrides?: Partial<ApplicationConfig>;
}
export interface ToolConfig {
    name: string;
    enabled: boolean;
    mode: 'dev' | 'full' | 'both';
    rateLimit?: {
        maxCalls: number;
        windowMs: number;
    };
    timeout?: number;
    retryable?: boolean;
}
export interface CacheConfig {
    enabled: boolean;
    ttl: number;
    maxSize: number;
    strategy: 'lru' | 'fifo';
}
export interface MetricsConfig {
    enabled: boolean;
    port: number;
    path: string;
    collectInterval: number;
}
export interface SecurityConfig {
    authentication: {
        enabled: boolean;
        type: 'bearer' | 'api-key' | 'none';
        header?: string;
    };
    encryption: {
        enabled: boolean;
        algorithm: string;
    };
    audit: {
        enabled: boolean;
        logLevel: 'all' | 'errors' | 'none';
    };
}
export interface RuntimeConfig {
    maintenance: boolean;
    readonly: boolean;
    maxConcurrentRequests: number;
    toolOverrides: Record<string, Partial<ToolConfig>>;
}
//# sourceMappingURL=config.d.ts.map