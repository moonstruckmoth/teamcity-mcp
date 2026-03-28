export interface MCPTool {
    name: string;
    description: string;
    inputSchema: Record<string, unknown>;
    handler: ToolHandler;
}
export interface ToolResponse {
    content?: Array<{
        type: string;
        text: string;
    }>;
    error?: string;
    success?: boolean;
    data?: unknown;
}
export type ToolHandler = (params: unknown) => Promise<ToolResponse>;
export interface ServerConfig {
    port: number;
    nodeEnv: 'development' | 'production' | 'test';
    logLevel: 'debug' | 'info' | 'warn' | 'error';
    mode: 'dev' | 'full';
}
export interface TeamCityConfig {
    url: string;
    token: string;
}
export interface AppConfig {
    server: ServerConfig;
    teamcity: TeamCityConfig;
}
export interface BuildConfiguration {
    id: string;
    name: string;
    projectId: string;
    description?: string;
    parameters?: Record<string, string>;
}
export interface Build {
    id: number;
    buildTypeId: string;
    number: string;
    status: BuildStatus;
    state: BuildState;
    branchName?: string;
    startDate?: string;
    finishDate?: string;
    queuedDate: string;
    statusText?: string;
}
export type BuildStatus = 'SUCCESS' | 'FAILURE' | 'ERROR' | 'UNKNOWN';
export type BuildState = 'queued' | 'running' | 'finished';
export interface TestOccurrence {
    id: string;
    name: string;
    status: 'SUCCESS' | 'FAILURE' | 'IGNORED';
    duration: number;
    details?: string;
    stackTrace?: string;
}
export interface Project {
    id: string;
    name: string;
    parentProjectId?: string;
    description?: string;
    archived: boolean;
}
export interface TriggerBuildRequest {
    buildTypeId: string;
    branchName?: string;
    parameters?: Record<string, string>;
    comment?: string;
}
export interface TriggerBuildResponse {
    id: number;
    buildTypeId: string;
    state: BuildState;
    href: string;
}
export interface BuildStatusRequest {
    buildId: number;
}
export interface BuildStatusResponse {
    id: number;
    state: BuildState;
    status?: BuildStatus;
    percentComplete?: number;
    statusText?: string;
}
export declare class MCPError extends Error {
    code: string;
    statusCode?: number | undefined;
    constructor(message: string, code: string, statusCode?: number | undefined);
}
export declare class TeamCityAPIError extends Error {
    statusCode: number;
    response?: unknown | undefined;
    constructor(message: string, statusCode: number, response?: unknown | undefined);
}
export declare function isError(value: unknown): value is Error;
export interface ZodErrorLike {
    name: 'ZodError';
    errors: Array<{
        path: (string | number)[];
        message: string;
        code: string;
    }>;
}
export declare function isZodError(value: unknown): value is ZodErrorLike;
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
export type AsyncReturnType<T extends (...args: unknown[]) => Promise<unknown>> = T extends (...args: unknown[]) => Promise<infer R> ? R : unknown;
export * from './mcp';
export * from './teamcity';
export * from './config';
//# sourceMappingURL=index.d.ts.map