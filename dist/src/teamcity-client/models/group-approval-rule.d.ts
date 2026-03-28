import type { Group } from './group';
import type { Users } from './users';
export interface GroupApprovalRule {
    currentlyApprovedBy?: Users;
    requiredApprovalsCount?: number;
    group?: Group;
}
//# sourceMappingURL=group-approval-rule.d.ts.map