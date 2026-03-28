import type { TeamCityAPIClientConfig } from '../api-client';
export interface TeamCityConnectionConfig {
    baseUrl: string;
    token: string;
    timeout?: number;
    maxConcurrentRequests?: number;
    keepAlive?: boolean;
    compression?: boolean;
}
export interface TeamCityRetryConfig {
    enabled?: boolean;
    maxRetries?: number;
    baseDelay?: number;
    maxDelay?: number;
    retryableStatuses?: number[];
}
export interface TeamCityPaginationConfig {
    defaultPageSize?: number;
    maxPageSize?: number;
    autoFetchAll?: boolean;
}
export interface TeamCityFullConfig {
    connection: TeamCityConnectionConfig;
    retry?: TeamCityRetryConfig;
    pagination?: TeamCityPaginationConfig;
    circuitBreaker?: {
        enabled?: boolean;
        failureThreshold?: number;
        resetTimeout?: number;
        successThreshold?: number;
    };
}
export declare const DEFAULT_CONFIG: TeamCityFullConfig;
export declare function loadTeamCityConfig(): TeamCityFullConfig;
export declare function mergeConfig(...configs: Array<Partial<TeamCityFullConfig>>): TeamCityFullConfig;
export declare function toApiClientConfig(config: TeamCityFullConfig): TeamCityAPIClientConfig;
export declare function validateConfig(config: TeamCityFullConfig): {
    isValid: boolean;
    errors: string[];
};
//# sourceMappingURL=config.d.ts.map