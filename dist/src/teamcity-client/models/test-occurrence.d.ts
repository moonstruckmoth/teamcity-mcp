import type { Build } from './build';
import type { Mute } from './mute';
import type { Test } from './test';
import type { TestOccurrences } from './test-occurrences';
import type { TestRunMetadata } from './test-run-metadata';
export interface TestOccurrence {
    id?: string;
    name?: string;
    status?: TestOccurrenceStatusEnum;
    ignored?: boolean;
    duration?: number;
    runOrder?: string;
    newFailure?: boolean;
    muted?: boolean;
    currentlyMuted?: boolean;
    currentlyInvestigated?: boolean;
    href?: string;
    ignoreDetails?: string;
    details?: string;
    test?: Test;
    mute?: Mute;
    build?: Build;
    firstFailed?: TestOccurrence;
    nextFixed?: TestOccurrence;
    invocations?: TestOccurrences;
    metadata?: TestRunMetadata;
    logAnchor?: string;
}
export declare const TestOccurrenceStatusEnum: {
    readonly Unknown: "UNKNOWN";
    readonly Normal: "NORMAL";
    readonly Warning: "WARNING";
    readonly Failure: "FAILURE";
    readonly Error: "ERROR";
};
export type TestOccurrenceStatusEnum = (typeof TestOccurrenceStatusEnum)[keyof typeof TestOccurrenceStatusEnum];
//# sourceMappingURL=test-occurrence.d.ts.map