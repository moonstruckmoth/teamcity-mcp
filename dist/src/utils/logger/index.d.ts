import { type Logger } from 'winston';
export type LogLevel = 'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly';
export interface LogContext {
    toolName?: string;
    requestId?: string;
    sessionId?: string;
    userId?: string;
    duration?: number;
    service?: string;
    buildId?: string;
    projectId?: string;
    [key: string]: unknown;
}
export interface LoggerConfig {
    name?: string;
    level?: LogLevel;
    enableConsole?: boolean;
    enableFile?: boolean;
    logDirectory?: string;
    maxFileSize?: string;
    maxFiles?: number;
}
export interface ILogger {
    debug(message: string, context?: LogContext): void;
    info(message: string, context?: LogContext): void;
    warn(message: string, context?: LogContext): void;
    error(message: string, error?: Error | unknown, context?: LogContext): void;
    child(context: LogContext): ILogger;
}
export declare class TeamCityLogger implements ILogger {
    private winston;
    private config;
    private requestCounter;
    constructor(config?: LoggerConfig);
    private normalizeConfig;
    private createWinstonLogger;
    private formatContextualLog;
    private ensureLogDirectory;
    private parseFileSize;
    generateRequestId(): string;
    debug(message: string, context?: LogContext): void;
    info(message: string, context?: LogContext): void;
    warn(message: string, context?: LogContext): void;
    error(message: string, error?: Error | unknown, context?: LogContext): void;
    child(context: LogContext): ILogger;
    logToolExecution(toolName: string, args: Record<string, unknown>, result: {
        success: boolean;
        error?: string;
    }, duration: number, context?: LogContext): void;
    logTeamCityRequest(method: string, url: string, status?: number, duration?: number, context?: LogContext): void;
    logLifecycle(event: string, details?: Record<string, unknown>): void;
    setLevel(level: LogLevel): void;
    getLevel(): LogLevel;
    getWinstonInstance(): Logger;
}
export declare function getLogger(config?: LoggerConfig): TeamCityLogger;
export declare function createLogger(config?: LoggerConfig): TeamCityLogger;
export declare const logger: {
    debug: (message: string, context?: LogContext) => void;
    info: (message: string, context?: LogContext) => void;
    warn: (message: string, context?: LogContext) => void;
    error: (message: string, error?: Error | unknown, context?: LogContext) => void;
    child: (context: LogContext) => ILogger;
    logToolExecution: (toolName: string, args: Record<string, unknown>, result: {
        success: boolean;
        error?: string;
    }, duration: number, context?: LogContext) => void;
    logTeamCityRequest: (method: string, url: string, status?: number, duration?: number, context?: LogContext) => void;
    logLifecycle: (event: string, details?: Record<string, unknown>) => void;
};
export declare const createTeamCityLogger: typeof createLogger;
export declare const getTeamCityLogger: typeof getLogger;
export declare const debug: (message: string, context?: LogContext) => void, info: (message: string, context?: LogContext) => void, warn: (message: string, context?: LogContext) => void, error: (message: string, error?: Error | unknown, context?: LogContext) => void, child: (context: LogContext) => ILogger;
//# sourceMappingURL=index.d.ts.map