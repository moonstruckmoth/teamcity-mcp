export interface DeploymentInstanceLocator {
    count?: number;
    currentState?: DeploymentInstanceLocatorCurrentStateEnum;
    dashboard?: string;
    id?: string;
    start?: number;
}
export declare const DeploymentInstanceLocatorCurrentStateEnum: {
    readonly InProgress: "in_progress";
    readonly Successful: "successful";
    readonly Failed: "failed";
    readonly Cancelled: "cancelled";
    readonly Unknown: "unknown";
};
export type DeploymentInstanceLocatorCurrentStateEnum = (typeof DeploymentInstanceLocatorCurrentStateEnum)[keyof typeof DeploymentInstanceLocatorCurrentStateEnum];
//# sourceMappingURL=deployment-instance-locator.d.ts.map