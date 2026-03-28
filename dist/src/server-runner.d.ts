import type { Server } from '@modelcontextprotocol/sdk/server/index.js';
export type LifecycleTransport = {
    close?: () => Promise<void> | void;
};
export declare function startServerLifecycle(server: Server, transport: LifecycleTransport): Promise<void>;
//# sourceMappingURL=server-runner.d.ts.map