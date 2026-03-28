import { z } from 'zod';
export interface ToolResponse {
    content?: Array<{
        type: string;
        text: string;
    }>;
    error?: string;
    success?: boolean;
    data?: unknown;
}
export declare function text(content: string): ToolResponse;
export declare function json(data: unknown): ToolResponse;
export declare function errorText(message: string): ToolResponse;
export declare function runTool<T>(toolName: string, schema: z.ZodSchema<T> | null, handler: (args: T) => Promise<ToolResponse>, rawArgs: unknown, context?: {
    requestId?: string;
    userId?: string;
}): Promise<ToolResponse>;
//# sourceMappingURL=mcp.d.ts.map