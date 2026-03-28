import { z } from 'zod';
export declare class MCPToolError extends Error {
    code: string;
    statusCode: number;
    data?: unknown | undefined;
    constructor(message: string, code?: string, statusCode?: number, data?: unknown | undefined);
}
export declare class MCPValidationError extends MCPToolError {
    errors?: z.ZodError | undefined;
    constructor(message: string, errors?: z.ZodError | undefined);
}
export declare class MCPAuthError extends MCPToolError {
    constructor(message: string);
}
export declare class MCPNotFoundError extends MCPToolError {
    constructor(resource: string);
}
export declare class MCPTeamCityError extends MCPToolError {
    readonly teamCityCode?: string;
    readonly requestId?: string;
    constructor(message: string, statusCode?: number, teamCityCode?: string, requestId?: string);
}
export declare class MCPConfigError extends MCPToolError {
    readonly configPath?: string | undefined;
    constructor(message: string, configPath?: string | undefined);
}
export declare class MCPTimeoutError extends MCPToolError {
    constructor(operation: string, timeout: number);
}
export declare class MCPRateLimitError extends MCPToolError {
    readonly retryAfter?: number | undefined;
    constructor(retryAfter?: number | undefined);
}
export interface ErrorResponse {
    error: {
        message: string;
        code: string;
        data?: unknown;
    };
    success: false;
}
export declare function formatError(err: unknown, context?: {
    requestId?: string;
    operation?: string;
}): ErrorResponse;
export declare function setupGlobalErrorHandlers(): void;
export declare function asyncHandler<T>(handler: (...args: unknown[]) => Promise<T>, operationName?: string): (...args: unknown[]) => Promise<T>;
export declare function safeJsonParse<T = unknown>(json: string, validator?: (data: unknown) => data is T): T | null;
export declare function retry<T>(fn: () => Promise<T>, options?: {
    retries?: number;
    delay?: number;
    exponentialBackoff?: boolean;
    shouldRetry?: (error: unknown) => boolean;
    operationName?: string;
}): Promise<T>;
//# sourceMappingURL=error.d.ts.map