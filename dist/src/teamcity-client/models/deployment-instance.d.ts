import type { DeploymentDashboard } from './deployment-dashboard';
import type { DeploymentStateEntries } from './deployment-state-entries';
export interface DeploymentInstance {
    id?: string;
    currentState?: DeploymentInstanceCurrentStateEnum;
    attributes?: {
        [key: string]: string;
    };
    deploymentStateEntries?: DeploymentStateEntries;
    deploymentDashboard?: DeploymentDashboard;
}
export declare const DeploymentInstanceCurrentStateEnum: {
    readonly InProgress: "IN_PROGRESS";
    readonly Successful: "SUCCESSFUL";
    readonly Failed: "FAILED";
    readonly Cancelled: "CANCELLED";
    readonly Unknown: "UNKNOWN";
};
export type DeploymentInstanceCurrentStateEnum = (typeof DeploymentInstanceCurrentStateEnum)[keyof typeof DeploymentInstanceCurrentStateEnum];
//# sourceMappingURL=deployment-instance.d.ts.map