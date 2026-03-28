import type { Investigations } from './investigations';
import type { Mutes } from './mutes';
import type { ProblemOccurrences } from './problem-occurrences';
export interface Problem {
    id?: string;
    type?: string;
    identity?: string;
    href?: string;
    description?: string;
    mutes?: Mutes;
    investigations?: Investigations;
    problemOccurrences?: ProblemOccurrences;
    locator?: string;
}
//# sourceMappingURL=problem.d.ts.map