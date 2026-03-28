import type { ApplicationConfig } from '../types/config';
export declare function loadConfig(): ApplicationConfig;
export declare function getConfig(): ApplicationConfig;
export declare function resetConfigCache(): void;
export declare function isProduction(): boolean;
export declare function isDevelopment(): boolean;
export declare function isTest(): boolean;
export declare function getMCPMode(): 'dev' | 'full';
export declare function setMCPMode(mode: 'dev' | 'full'): void;
export declare function setServerInstance(server: import('@modelcontextprotocol/sdk/server/index.js').Server): void;
export declare function getServerInstance(): import('@modelcontextprotocol/sdk/server/index.js').Server | null;
export declare function resetMCPMode(): void;
export declare function getTeamCityConnectionOptions(): {
    timeout: number;
    maxConcurrentRequests: number;
    keepAlive: boolean;
    compression: boolean;
};
export declare function getTeamCityRetryOptions(): {
    enabled: boolean;
    maxRetries: number;
    baseDelay: number;
    maxDelay: number;
};
export declare function getTeamCityPaginationOptions(): {
    defaultPageSize: number;
    maxPageSize: number;
    autoFetchAll: boolean;
};
export declare function getTeamCityCircuitBreakerOptions(): {
    enabled: boolean;
    failureThreshold: number;
    resetTimeout: number;
    successThreshold: number;
};
export declare function getTeamCityOptions(): {
    connection: ReturnType<typeof getTeamCityConnectionOptions>;
    retry: ReturnType<typeof getTeamCityRetryOptions>;
    pagination: ReturnType<typeof getTeamCityPaginationOptions>;
    circuitBreaker: ReturnType<typeof getTeamCityCircuitBreakerOptions>;
};
export declare function getTeamCityUrl(): string;
export declare function getTeamCityToken(): string;
export type Config = ApplicationConfig;
//# sourceMappingURL=index.d.ts.map