export interface InvestigationLocator {
    affectedProject?: string;
    assignee?: string;
    assignmentProject?: string;
    buildType?: string;
    count?: number;
    problem?: string;
    reporter?: string;
    resolution?: InvestigationLocatorResolutionEnum;
    sinceDate?: string;
    start?: number;
    state?: InvestigationLocatorStateEnum;
    test?: string;
    type?: InvestigationLocatorTypeEnum;
}
export declare const InvestigationLocatorResolutionEnum: {
    readonly Manually: "manually";
    readonly WhenFixed: "when_fixed";
};
export type InvestigationLocatorResolutionEnum = (typeof InvestigationLocatorResolutionEnum)[keyof typeof InvestigationLocatorResolutionEnum];
export declare const InvestigationLocatorStateEnum: {
    readonly Taken: "taken";
    readonly Fixed: "fixed";
    readonly GivenUp: "given_up";
    readonly None: "none";
};
export type InvestigationLocatorStateEnum = (typeof InvestigationLocatorStateEnum)[keyof typeof InvestigationLocatorStateEnum];
export declare const InvestigationLocatorTypeEnum: {
    readonly AnyProblem: "anyProblem";
    readonly Test: "test";
    readonly Problem: "problem";
    readonly Unknown: "unknown";
};
export type InvestigationLocatorTypeEnum = (typeof InvestigationLocatorTypeEnum)[keyof typeof InvestigationLocatorTypeEnum];
//# sourceMappingURL=investigation-locator.d.ts.map