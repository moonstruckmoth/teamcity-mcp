import type { VersionedSettingsError } from './versioned-settings-error';
export interface VersionedSettingsStatus {
    dslOutdated?: boolean;
    missingContextParameters?: Array<string>;
    message?: string;
    type?: VersionedSettingsStatusTypeEnum;
    timestamp?: string;
    versionedSettingsError?: Array<VersionedSettingsError>;
}
export declare const VersionedSettingsStatusTypeEnum: {
    readonly Info: "info";
    readonly Warn: "warn";
};
export type VersionedSettingsStatusTypeEnum = (typeof VersionedSettingsStatusTypeEnum)[keyof typeof VersionedSettingsStatusTypeEnum];
//# sourceMappingURL=versioned-settings-status.d.ts.map