import type { VcsRootInstance } from './vcs-root-instance';
export interface VcsLabel {
    text?: string;
    failureReason?: string;
    status?: VcsLabelStatusEnum;
    buildId?: number;
    'vcs-root-instance'?: VcsRootInstance;
}
export declare const VcsLabelStatusEnum: {
    readonly Unknown: "UNKNOWN";
    readonly SuccessfulSet: "SUCCESSFUL_SET";
    readonly IsBeingSet: "IS_BEING_SET";
    readonly Failed: "FAILED";
    readonly DisabledForTheRoot: "DISABLED_FOR_THE_ROOT";
    readonly LabelingNotSupported: "LABELING_NOT_SUPPORTED";
};
export type VcsLabelStatusEnum = (typeof VcsLabelStatusEnum)[keyof typeof VcsLabelStatusEnum];
//# sourceMappingURL=vcs-label.d.ts.map