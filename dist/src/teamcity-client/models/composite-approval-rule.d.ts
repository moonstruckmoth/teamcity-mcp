import type { Group } from './group';
import type { User } from './user';
import type { Users } from './users';
export interface CompositeApprovalRule {
    users?: Array<User>;
    currentlyApprovedBy?: Users;
    requiredApprovalsCount?: number;
    groups?: Array<Group>;
}
//# sourceMappingURL=composite-approval-rule.d.ts.map