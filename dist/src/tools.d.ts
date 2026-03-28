export interface ToolResponse {
    content?: Array<{
        type: string;
        text: string;
    }>;
    error?: string;
    success?: boolean;
    data?: unknown;
}
export interface ToolDefinition {
    name: string;
    description: string;
    inputSchema: unknown;
    handler: (args: unknown) => Promise<ToolResponse>;
    mode?: 'dev' | 'full';
}
export declare function getMCPMode(): 'dev' | 'full';
export declare function getAvailableTools(): ToolDefinition[];
export declare function getTool(name: string): ToolDefinition | undefined;
export declare function getRequiredTool(name: string): ToolDefinition;
export declare function getToolNames(): string[];
//# sourceMappingURL=tools.d.ts.map