import type { ProblemOccurrence } from './problem-occurrence';
export interface ProblemOccurrences {
    count?: number;
    href?: string;
    nextHref?: string;
    prevHref?: string;
    problemOccurrence?: Array<ProblemOccurrence>;
    passed?: number;
    failed?: number;
    newFailed?: number;
    ignored?: number;
    muted?: number;
}
//# sourceMappingURL=problem-occurrences.d.ts.map