import type { ApprovableBuild } from './approvable-build';
import type { BuildsWithReason } from './builds-with-reason';
import type { CompositeApprovals } from './composite-approvals';
import type { GroupApprovals } from './group-approvals';
import type { UserApprovals } from './user-approvals';
export interface ApprovalInfo {
    canBeApprovedByCurrentUser?: boolean;
    timeoutTimestamp?: string;
    configurationValid?: boolean;
    userApprovals?: UserApprovals;
    groupApprovals?: GroupApprovals;
    compositeApprovals?: CompositeApprovals;
    approvalReasons?: Array<ApprovableBuild>;
    buildChainBuilds?: Array<BuildsWithReason>;
    status?: ApprovalInfoStatusEnum;
}
export declare const ApprovalInfoStatusEnum: {
    readonly WaitingForApproval: "waitingForApproval";
    readonly Approved: "approved";
    readonly TimedOut: "timedOut";
    readonly Canceled: "canceled";
};
export type ApprovalInfoStatusEnum = (typeof ApprovalInfoStatusEnum)[keyof typeof ApprovalInfoStatusEnum];
//# sourceMappingURL=approval-info.d.ts.map