export interface LicenseKey {
    valid?: boolean;
    active?: boolean;
    expired?: boolean;
    obsolete?: boolean;
    expirationDate?: string;
    maintenanceEndDate?: string;
    type?: LicenseKeyTypeEnum;
    servers?: number;
    agents?: number;
    unlimitedAgents?: boolean;
    buildTypes?: number;
    unlimitedBuildTypes?: boolean;
    pipelines?: number;
    unlimitedPipelines?: boolean;
    errorDetails?: string;
    key?: string;
    rawType?: string;
}
export declare const LicenseKeyTypeEnum: {
    readonly Evaluation: "evaluation";
    readonly Eap: "eap";
    readonly OpenSource: "open_source";
    readonly Commercial: "commercial";
    readonly Enterprise: "enterprise";
    readonly Professional: "professional";
};
export type LicenseKeyTypeEnum = (typeof LicenseKeyTypeEnum)[keyof typeof LicenseKeyTypeEnum];
//# sourceMappingURL=license-key.d.ts.map