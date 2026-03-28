import type { AxiosError } from 'axios';
export declare class TeamCityAPIError extends Error {
    readonly code: string;
    readonly statusCode?: number;
    readonly details?: unknown;
    readonly requestId?: string;
    readonly originalError?: Error;
    constructor(message: string, code: string, statusCode?: number, details?: unknown, requestId?: string, originalError?: Error);
    static fromAxiosError(error: AxiosError, requestId?: string): TeamCityAPIError;
    toJSON(): Record<string, unknown>;
}
export declare class TeamCityAuthenticationError extends TeamCityAPIError {
    constructor(message?: string, requestId?: string, originalError?: Error);
}
export declare class TeamCityAuthorizationError extends TeamCityAPIError {
    constructor(message?: string, requestId?: string, originalError?: Error);
}
export declare class TeamCityNotFoundError extends TeamCityAPIError {
    constructor(resource: string, identifier?: string, requestId?: string, originalError?: Error);
}
export declare class TeamCityValidationError extends TeamCityAPIError {
    readonly validationErrors: Array<{
        field: string;
        message: string;
    }>;
    constructor(validationErrors: Array<{
        field: string;
        message: string;
    }>, requestId?: string, originalError?: Error);
}
export declare class TeamCityRateLimitError extends TeamCityAPIError {
    readonly retryAfter?: number;
    constructor(retryAfter?: number, requestId?: string, originalError?: Error);
}
export declare class TeamCityServerError extends TeamCityAPIError {
    constructor(message?: string, statusCode?: number, requestId?: string, originalError?: Error);
}
export declare class TeamCityNetworkError extends TeamCityAPIError {
    constructor(message?: string, requestId?: string, originalError?: Error);
}
export declare class TeamCityRequestError extends TeamCityAPIError {
    constructor(message?: string, requestId?: string, originalError?: Error);
}
export declare class TeamCityTimeoutError extends TeamCityAPIError {
    constructor(timeout: number, requestId?: string, originalError?: Error);
}
export declare function isRetryableError(error: Error): boolean;
export declare class BuildNotFoundError extends TeamCityNotFoundError {
    constructor(message: string, requestId?: string, originalError?: Error);
}
export declare class BuildAccessDeniedError extends TeamCityAuthorizationError {
    constructor(message: string, requestId?: string, originalError?: Error);
}
export declare class BuildConfigurationNotFoundError extends TeamCityNotFoundError {
    constructor(message: string, requestId?: string, originalError?: Error);
}
export declare class BuildConfigurationPermissionError extends TeamCityAuthorizationError {
    readonly buildConfigurationId?: string;
    constructor(message: string, configId?: string, requestId?: string, originalError?: Error);
}
export declare class BuildStepNotFoundError extends TeamCityNotFoundError {
    constructor(message: string, stepId: string, requestId?: string, originalError?: Error);
}
export declare class PermissionDeniedError extends TeamCityAuthorizationError {
    constructor(message: string, operation: string, requestId?: string, originalError?: Error);
}
export declare class ValidationError extends TeamCityValidationError {
    readonly fieldDetails?: unknown;
    constructor(message: string, details?: unknown, requestId?: string, originalError?: Error);
}
export declare class TriggerNotFoundError extends TeamCityNotFoundError {
    constructor(message: string, triggerId: string, requestId?: string, originalError?: Error);
}
export declare class CircularDependencyError extends TeamCityValidationError {
    readonly dependencyDetails?: unknown;
    constructor(message: string, details?: unknown, requestId?: string, originalError?: Error);
}
export declare function getRetryDelay(error: Error, attempt: number, baseDelay?: number): number;
//# sourceMappingURL=errors.d.ts.map