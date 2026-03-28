export interface BranchLocator {
    $singleValue?: string;
    build?: string;
    buildType?: string;
    changesFromDependencies?: BranchLocatorChangesFromDependenciesEnum;
    count?: number;
    default?: BranchLocatorDefaultEnum;
    name?: string;
    policy?: BranchLocatorPolicyEnum;
    start?: number;
    unspecified?: BranchLocatorUnspecifiedEnum;
}
export declare const BranchLocatorChangesFromDependenciesEnum: {
    readonly True: "true";
    readonly False: "false";
    readonly Any: "any";
};
export type BranchLocatorChangesFromDependenciesEnum = (typeof BranchLocatorChangesFromDependenciesEnum)[keyof typeof BranchLocatorChangesFromDependenciesEnum];
export declare const BranchLocatorDefaultEnum: {
    readonly True: "true";
    readonly False: "false";
    readonly Any: "any";
};
export type BranchLocatorDefaultEnum = (typeof BranchLocatorDefaultEnum)[keyof typeof BranchLocatorDefaultEnum];
export declare const BranchLocatorPolicyEnum: {
    readonly VcsBranches: "vcs_branches";
    readonly ActiveVcsBranches: "active_vcs_branches";
    readonly HistoryBranches: "history_branches";
    readonly ActiveHistoryBranches: "active_history_branches";
    readonly ActiveHistoryAndActiveVcsBranches: "active_history_and_active_vcs_branches";
    readonly AllBranches: "all_branches";
};
export type BranchLocatorPolicyEnum = (typeof BranchLocatorPolicyEnum)[keyof typeof BranchLocatorPolicyEnum];
export declare const BranchLocatorUnspecifiedEnum: {
    readonly True: "true";
    readonly False: "false";
    readonly Any: "any";
};
export type BranchLocatorUnspecifiedEnum = (typeof BranchLocatorUnspecifiedEnum)[keyof typeof BranchLocatorUnspecifiedEnum];
//# sourceMappingURL=branch-locator.d.ts.map