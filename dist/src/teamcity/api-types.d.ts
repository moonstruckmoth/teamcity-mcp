export interface TeamCityProperty {
    name: string;
    value: string;
    inherited?: boolean;
    type?: {
        rawValue?: string;
    };
}
export interface TeamCityProperties {
    count?: number;
    property?: TeamCityProperty | TeamCityProperty[];
}
export interface TeamCityTriggerResponse {
    id: string;
    type: string;
    disabled?: boolean;
    inherited?: boolean;
    properties?: TeamCityProperties;
}
export interface TeamCityTriggersResponse {
    count?: number;
    trigger?: TeamCityTriggerResponse | TeamCityTriggerResponse[];
}
export interface TeamCityStepResponse {
    id: string;
    name: string;
    type: string;
    disabled?: boolean;
    inherited?: boolean;
    properties?: TeamCityProperties;
}
export interface TeamCityStepsResponse {
    count?: number;
    step?: TeamCityStepResponse | TeamCityStepResponse[];
}
export interface TeamCityVcsRootEntry {
    id: string;
    inherited?: boolean;
    'checkout-rules'?: string;
    'vcs-root': {
        id: string;
        name: string;
        href?: string;
        properties?: TeamCityProperties;
    };
}
export interface TeamCityVcsRootEntriesResponse {
    count?: number;
    'vcs-root-entry'?: TeamCityVcsRootEntry | TeamCityVcsRootEntry[];
}
export interface TeamCityBuildTypeResponse {
    id: string;
    name: string;
    projectId: string;
    projectName?: string;
    description?: string;
    webUrl?: string;
    paused?: boolean;
    templateFlag?: boolean;
    parameters?: TeamCityProperties;
    settings?: TeamCityProperties;
    'vcs-root-entries'?: TeamCityVcsRootEntriesResponse;
    triggers?: TeamCityTriggersResponse;
    steps?: TeamCityStepsResponse;
    features?: {
        count?: number;
        feature?: Array<{
            id: string;
            type: string;
            properties?: TeamCityProperties;
        }>;
    };
    'snapshot-dependencies'?: {
        count?: number;
        'snapshot-dependency'?: Array<{
            id: string;
            type: string;
            properties?: TeamCityProperties;
            'source-buildType': {
                id: string;
                name: string;
            };
        }>;
    };
    'artifact-dependencies'?: {
        count?: number;
        'artifact-dependency'?: Array<{
            id: string;
            type: string;
            properties?: TeamCityProperties;
            'source-buildType': {
                id: string;
                name: string;
            };
        }>;
    };
}
export interface TeamCityBuildTypesResponse {
    count?: number;
    buildType?: TeamCityBuildTypeResponse | TeamCityBuildTypeResponse[];
}
export interface TeamCityProjectResponse {
    id: string;
    name: string;
    parentProjectId?: string;
    href?: string;
    webUrl?: string;
    description?: string;
    archived?: boolean;
    parameters?: TeamCityProperties;
    projects?: {
        count?: number;
        project?: TeamCityProjectResponse | TeamCityProjectResponse[];
    };
    buildTypes?: TeamCityBuildTypesResponse;
}
export interface TeamCityProjectsResponse {
    count?: number;
    project?: TeamCityProjectResponse | TeamCityProjectResponse[];
}
export interface TeamCityBuildResponse {
    id: number;
    buildTypeId: string;
    number?: string;
    status?: 'SUCCESS' | 'FAILURE' | 'ERROR' | 'UNKNOWN';
    state?: 'queued' | 'running' | 'finished';
    branchName?: string;
    defaultBranch?: boolean;
    href?: string;
    webUrl?: string;
    statusText?: string;
    buildType?: {
        id: string;
        name: string;
        projectId: string;
        projectName: string;
    };
    queuedDate?: string;
    startDate?: string;
    finishDate?: string;
    running?: boolean;
    percentageComplete?: number;
    properties?: TeamCityProperties;
    tags?: {
        count?: number;
        tag?: Array<{
            name: string;
        }>;
    };
    revisions?: {
        count?: number;
        revision?: Array<{
            version: string;
            vcsBranchName?: string;
            'vcs-root-instance': {
                id: string;
                name: string;
            };
        }>;
    };
    changes?: {
        count?: number;
        change?: Array<{
            id: number;
            version: string;
            username: string;
            date: string;
            comment?: string;
        }>;
    };
    artifacts?: {
        count?: number;
        file?: Array<{
            name: string;
            size: number;
            modificationTime: string;
            href?: string;
            content?: {
                href: string;
            };
        }>;
    };
    problemOccurrences?: {
        count?: number;
        problemOccurrence?: Array<{
            id: string;
            type: string;
            identity: string;
            details?: string;
            additionalData?: string;
        }>;
    };
    testOccurrences?: {
        count?: number;
        testOccurrence?: Array<{
            id: string;
            name: string;
            status: 'SUCCESS' | 'FAILURE' | 'IGNORED' | 'UNKNOWN';
            duration?: number;
            details?: string;
        }>;
    };
}
export interface TeamCityBuildsResponse {
    count?: number;
    build?: TeamCityBuildResponse | TeamCityBuildResponse[];
}
export interface TeamCityErrorResponse {
    message?: string;
    details?: string;
}
export declare const isTeamCityErrorResponse: (response: unknown) => response is TeamCityErrorResponse;
export declare const isTeamCityProperty: (value: unknown) => value is TeamCityProperty;
export declare const isTeamCityProperties: (value: unknown) => value is TeamCityProperties;
export declare const isTeamCityTriggerResponse: (value: unknown) => value is TeamCityTriggerResponse;
export declare const isTeamCityTriggersResponse: (value: unknown) => value is TeamCityTriggersResponse;
export declare const isTeamCityVcsRootEntry: (value: unknown) => value is TeamCityVcsRootEntry;
export declare const isTeamCityVcsRootEntriesResponse: (value: unknown) => value is TeamCityVcsRootEntriesResponse;
export declare const isPropertyArray: (prop: TeamCityProperty | TeamCityProperty[] | undefined) => prop is TeamCityProperty[];
export declare const isTriggerArray: (trigger: TeamCityTriggerResponse | TeamCityTriggerResponse[] | undefined) => trigger is TeamCityTriggerResponse[];
export declare const isStepArray: (step: TeamCityStepResponse | TeamCityStepResponse[] | undefined) => step is TeamCityStepResponse[];
export declare const isBuildTypeArray: (buildType: TeamCityBuildTypeResponse | TeamCityBuildTypeResponse[] | undefined) => buildType is TeamCityBuildTypeResponse[];
export declare const isVcsRootEntryArray: (entry: TeamCityVcsRootEntry | TeamCityVcsRootEntry[] | undefined) => entry is TeamCityVcsRootEntry[];
export declare function normalizeProperties(properties: TeamCityProperties | undefined): TeamCityProperty[];
export declare function normalizeTriggers(response: TeamCityTriggersResponse | undefined): TeamCityTriggerResponse[];
export declare function normalizeSteps(response: TeamCityStepsResponse | undefined): TeamCityStepResponse[];
export declare function normalizeBuildTypes(response: TeamCityBuildTypesResponse | undefined): TeamCityBuildTypeResponse[];
export declare function normalizeVcsRootEntries(response: TeamCityVcsRootEntriesResponse | undefined): TeamCityVcsRootEntry[];
export declare function propertiesToRecord(properties: TeamCityProperty[]): Record<string, string>;
//# sourceMappingURL=api-types.d.ts.map