export interface EnvFileResult {
    success: boolean;
    values?: Record<string, string>;
    error?: string;
}
export declare function loadEnvFile(filepath: string): EnvFileResult;
//# sourceMappingURL=env-file.d.ts.map