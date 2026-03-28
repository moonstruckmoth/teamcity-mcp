export interface VcsRootLocator {
    affectedProject?: string;
    count?: number;
    id?: string;
    internalId?: number;
    item?: string;
    lookupLimit?: number;
    name?: string;
    project?: string;
    property?: VcsRootLocatorPropertyEnum;
    start?: number;
    type?: string;
    uuid?: string;
}
export declare const VcsRootLocatorPropertyEnum: {
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
export type VcsRootLocatorPropertyEnum = (typeof VcsRootLocatorPropertyEnum)[keyof typeof VcsRootLocatorPropertyEnum];
//# sourceMappingURL=vcs-root-locator.d.ts.map