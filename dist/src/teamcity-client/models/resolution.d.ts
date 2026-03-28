export interface Resolution {
    type?: ResolutionTypeEnum;
    time?: string;
}
export declare const ResolutionTypeEnum: {
    readonly Manually: "manually";
    readonly WhenFixed: "whenFixed";
    readonly AtTime: "atTime";
};
export type ResolutionTypeEnum = (typeof ResolutionTypeEnum)[keyof typeof ResolutionTypeEnum];
//# sourceMappingURL=resolution.d.ts.map