import type { LicenseKeys } from './license-keys';
export interface LicensingData {
    licenseUseExceeded?: boolean;
    maxAgents?: number;
    unlimitedAgents?: boolean;
    maxBuildTypes?: number;
    unlimitedBuildTypes?: boolean;
    buildTypesLeft?: number;
    maxPipelines?: number;
    unlimitedPipelines?: boolean;
    pipelinesLeft?: number;
    serverLicenseType?: LicensingDataServerLicenseTypeEnum;
    serverEffectiveReleaseDate?: string;
    agentsLeft?: number;
    licenseKeys?: LicenseKeys;
}
export declare const LicensingDataServerLicenseTypeEnum: {
    readonly Evaluation: "evaluation";
    readonly Eap: "eap";
    readonly OpenSource: "open_source";
    readonly Commercial: "commercial";
    readonly Enterprise: "enterprise";
    readonly Professional: "professional";
};
export type LicensingDataServerLicenseTypeEnum = (typeof LicensingDataServerLicenseTypeEnum)[keyof typeof LicensingDataServerLicenseTypeEnum];
//# sourceMappingURL=licensing-data.d.ts.map