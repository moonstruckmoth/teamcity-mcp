import type { Build } from './build';
export interface DeploymentStateEntry {
    state?: DeploymentStateEntryStateEnum;
    deploymentDate?: string;
    entryFromPosted?: DeploymentStateEntry;
    build?: Build;
}
export declare const DeploymentStateEntryStateEnum: {
    readonly InProgress: "IN_PROGRESS";
    readonly Successful: "SUCCESSFUL";
    readonly Failed: "FAILED";
    readonly Cancelled: "CANCELLED";
    readonly Unknown: "UNKNOWN";
};
export type DeploymentStateEntryStateEnum = (typeof DeploymentStateEntryStateEnum)[keyof typeof DeploymentStateEntryStateEnum];
//# sourceMappingURL=deployment-state-entry.d.ts.map