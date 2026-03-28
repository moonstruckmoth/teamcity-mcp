import type { TestCounters } from './test-counters';
import type { TestOccurrence } from './test-occurrence';
export interface TestOccurrences {
    count?: number;
    href?: string;
    nextHref?: string;
    prevHref?: string;
    testOccurrence?: Array<TestOccurrence>;
    testCounters?: TestCounters;
    ignored?: number;
    failed?: number;
    passed?: number;
    newFailed?: number;
    muted?: number;
}
//# sourceMappingURL=test-occurrences.d.ts.map