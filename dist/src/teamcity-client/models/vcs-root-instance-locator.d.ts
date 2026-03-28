export interface VcsRootInstanceLocator {
    affectedProject?: string;
    build?: string;
    buildType?: string;
    count?: number;
    id?: string;
    item?: string;
    lookupLimit?: number;
    project?: string;
    property?: VcsRootInstanceLocatorPropertyEnum;
    start?: number;
    type?: string;
    vcsRoot?: string;
    versionedSettings?: boolean;
}
export declare const VcsRootInstanceLocatorPropertyEnum: {
    readonly Exists: "exists";
    readonly NotExists: "not-exists";
    readonly Equals: "equals";
    readonly DoesNotEqual: "does-not-equal";
    readonly StartsWith: "starts-with";
    readonly Contains: "contains";
    readonly DoesNotContain: "does-not-contain";
    readonly EndsWith: "ends-with";
    readonly Any: "any";
    readonly Matches: "matches";
    readonly DoesNotMatch: "does-not-match";
    readonly MoreThan: "more-than";
    readonly NoMoreThan: "no-more-than";
    readonly LessThan: "less-than";
    readonly NoLessThan: "no-less-than";
    readonly VerMoreThan: "ver-more-than";
    readonly VerNoMoreThan: "ver-no-more-than";
    readonly VerLessThan: "ver-less-than";
    readonly VerNoLessThan: "ver-no-less-than";
};
export type VcsRootInstanceLocatorPropertyEnum = (typeof VcsRootInstanceLocatorPropertyEnum)[keyof typeof VcsRootInstanceLocatorPropertyEnum];
//# sourceMappingURL=vcs-root-instance-locator.d.ts.map