import { ErrorContext } from '../utils/error-logger';
import { ErrorResponse } from './error';
export interface GlobalErrorHandlerOptions {
    includeStackTrace?: boolean;
    sanitizeErrors?: boolean;
    logErrors?: boolean;
    defaultErrorMessage?: string;
}
export declare class GlobalErrorHandler {
    private readonly options;
    private static instance;
    constructor(options?: GlobalErrorHandlerOptions);
    static getInstance(options?: GlobalErrorHandlerOptions): GlobalErrorHandler;
    handleToolError(error: unknown, toolName: string, context?: ErrorContext): ErrorResponse;
    handleAsyncError(error: unknown, operationName: string, context?: ErrorContext): never;
    private transformError;
    private transformAxiosError;
    private sanitizeErrorMessage;
    isRetryableError(error: unknown): boolean;
}
export declare const globalErrorHandler: GlobalErrorHandler;
//# sourceMappingURL=global-error-handler.d.ts.map