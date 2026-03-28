import type { Comment } from './comment';
import type { ProblemScope } from './problem-scope';
import type { ProblemTarget } from './problem-target';
import type { Resolution } from './resolution';
import type { User } from './user';
export interface Investigation {
    id?: string;
    state?: InvestigationStateEnum;
    href?: string;
    assignee?: User;
    assignment?: Comment;
    scope?: ProblemScope;
    target?: ProblemTarget;
    resolution?: Resolution;
    responsible?: User;
}
export declare const InvestigationStateEnum: {
    readonly Taken: "TAKEN";
    readonly Fixed: "FIXED";
    readonly GivenUp: "GIVEN_UP";
    readonly None: "NONE";
};
export type InvestigationStateEnum = (typeof InvestigationStateEnum)[keyof typeof InvestigationStateEnum];
//# sourceMappingURL=investigation.d.ts.map