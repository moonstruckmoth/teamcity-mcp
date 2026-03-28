export interface MuteLocator {
    affectedProject?: string;
    count?: number;
    creationDate?: string;
    id?: number;
    problem?: string;
    project?: string;
    reporter?: string;
    resolution?: MuteLocatorResolutionEnum;
    start?: number;
    test?: string;
    type?: MuteLocatorTypeEnum;
    unmuteDate?: string;
}
export declare const MuteLocatorResolutionEnum: {
    readonly Manually: "manually";
    readonly Whenfixed: "whenfixed";
    readonly Attime: "attime";
};
export type MuteLocatorResolutionEnum = (typeof MuteLocatorResolutionEnum)[keyof typeof MuteLocatorResolutionEnum];
export declare const MuteLocatorTypeEnum: {
    readonly Test: "test";
    readonly Problem: "problem";
};
export type MuteLocatorTypeEnum = (typeof MuteLocatorTypeEnum)[keyof typeof MuteLocatorTypeEnum];
//# sourceMappingURL=mute-locator.d.ts.map