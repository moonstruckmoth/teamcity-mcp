export interface TestOccurrenceLocator {
    affectedProject?: string;
    branch?: string;
    build?: string;
    buildType?: string;
    count?: number;
    currentlyFailing?: boolean;
    currentlyInvestigated?: boolean;
    currentlyMuted?: string;
    id?: string;
    ignored?: boolean;
    includePersonal?: boolean;
    item?: string;
    lookupLimit?: number;
    muted?: boolean;
    name?: string;
    newFailure?: string;
    start?: number;
    status?: TestOccurrenceLocatorStatusEnum;
    test?: string;
}
export declare const TestOccurrenceLocatorStatusEnum: {
    readonly Unknown: "unknown";
    readonly Normal: "normal";
    readonly Warning: "warning";
    readonly Failure: "failure";
    readonly Error: "error";
    readonly Success: "success";
};
export type TestOccurrenceLocatorStatusEnum = (typeof TestOccurrenceLocatorStatusEnum)[keyof typeof TestOccurrenceLocatorStatusEnum];
//# sourceMappingURL=test-occurrence-locator.d.ts.map