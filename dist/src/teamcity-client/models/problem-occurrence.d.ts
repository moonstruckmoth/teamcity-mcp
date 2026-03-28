import type { Build } from './build';
import type { Mute } from './mute';
import type { Problem } from './problem';
export interface ProblemOccurrence {
    id?: string;
    type?: string;
    identity?: string;
    href?: string;
    muted?: boolean;
    currentlyInvestigated?: boolean;
    currentlyMuted?: boolean;
    logAnchor?: string;
    newFailure?: boolean;
    details?: string;
    additionalData?: string;
    problem?: Problem;
    mute?: Mute;
    build?: Build;
}
//# sourceMappingURL=problem-occurrence.d.ts.map