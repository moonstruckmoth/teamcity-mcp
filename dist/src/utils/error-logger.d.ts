export interface ErrorContext {
    requestId?: string;
    userId?: string;
    operation?: string;
    component?: string;
    metadata?: Record<string, unknown>;
    [key: string]: unknown;
}
export interface LoggedError {
    message: string;
    stack?: string;
    code?: string;
    timestamp: string;
    context?: ErrorContext;
}
export declare class ErrorLogger {
    private static instance;
    static getInstance(): ErrorLogger;
    logError(message: string, error?: Error | unknown, context?: ErrorContext): LoggedError;
    logWarning(message: string, context?: ErrorContext): void;
    logInfo(message: string, context?: ErrorContext): void;
    forComponent(componentName: string): ComponentErrorLogger;
}
export declare class ComponentErrorLogger {
    private readonly componentName;
    private readonly errorLogger;
    constructor(componentName: string, errorLogger: ErrorLogger);
    logError(message: string, error?: Error | unknown, context?: Omit<ErrorContext, 'component'>): LoggedError;
    logWarning(message: string, context?: Omit<ErrorContext, 'component'>): void;
    logInfo(message: string, context?: Omit<ErrorContext, 'component'>): void;
}
export declare const errorLogger: ErrorLogger;
export declare function logStructured(level: 'error' | 'warn' | 'info', message: string, error?: Error | unknown, context?: ErrorContext): void;
//# sourceMappingURL=error-logger.d.ts.map