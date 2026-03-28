export interface VersionedSettingsConfig {
    synchronizationMode?: VersionedSettingsConfigSynchronizationModeEnum;
    showSettingsChanges?: boolean;
    vcsRootId?: string;
    buildSettingsMode?: VersionedSettingsConfigBuildSettingsModeEnum;
    settingsPath?: string;
    importDecision?: VersionedSettingsConfigImportDecisionEnum;
    storeSecureValuesOutsideVcs?: boolean;
    portableDsl?: boolean;
    allowUIEditing?: boolean;
    applyChangesInDependenciesAndVcsSettings?: boolean;
    format?: string;
}
export declare const VersionedSettingsConfigSynchronizationModeEnum: {
    readonly UseParentProjectSettings: "useParentProjectSettings";
    readonly Disabled: "disabled";
    readonly Enabled: "enabled";
};
export type VersionedSettingsConfigSynchronizationModeEnum = (typeof VersionedSettingsConfigSynchronizationModeEnum)[keyof typeof VersionedSettingsConfigSynchronizationModeEnum];
export declare const VersionedSettingsConfigBuildSettingsModeEnum: {
    readonly AlwaysUseCurrent: "alwaysUseCurrent";
    readonly UseCurrentByDefault: "useCurrentByDefault";
    readonly UseFromVcs: "useFromVCS";
};
export type VersionedSettingsConfigBuildSettingsModeEnum = (typeof VersionedSettingsConfigBuildSettingsModeEnum)[keyof typeof VersionedSettingsConfigBuildSettingsModeEnum];
export declare const VersionedSettingsConfigImportDecisionEnum: {
    readonly OverrideInVcs: "overrideInVCS";
    readonly ImportFromVcs: "importFromVCS";
};
export type VersionedSettingsConfigImportDecisionEnum = (typeof VersionedSettingsConfigImportDecisionEnum)[keyof typeof VersionedSettingsConfigImportDecisionEnum];
//# sourceMappingURL=versioned-settings-config.d.ts.map