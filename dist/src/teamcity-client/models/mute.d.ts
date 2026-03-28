import type { Comment } from './comment';
import type { ProblemScope } from './problem-scope';
import type { ProblemTarget } from './problem-target';
import type { Resolution } from './resolution';
export interface Mute {
    id?: number;
    href?: string;
    assignment?: Comment;
    scope?: ProblemScope;
    target?: ProblemTarget;
    resolution?: Resolution;
}
//# sourceMappingURL=mute.d.ts.map