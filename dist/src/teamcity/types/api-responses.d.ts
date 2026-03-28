export interface BuildTypeProperty {
    name: string;
    value: string;
    type?: string;
    inherited?: boolean;
}
export interface BuildTypeParameters {
    property?: BuildTypeProperty[];
    count?: number;
    href?: string;
}
export interface BuildTypeVcsRootEntry {
    id?: string;
    'checkout-rules'?: string;
    'vcs-root'?: {
        id: string;
        name?: string;
        vcsName?: string;
        href?: string;
        properties?: {
            property?: BuildTypeProperty[];
        };
    };
}
export interface BuildTypeVcsRootEntries {
    'vcs-root-entry'?: BuildTypeVcsRootEntry[];
    count?: number;
}
export interface BuildTypeStep {
    id: string;
    name?: string;
    type?: string;
    disabled?: boolean;
    properties?: BuildTypeParameters;
}
export interface BuildTypeSteps {
    step?: BuildTypeStep[];
    count?: number;
}
export interface BuildTypeTrigger {
    id: string;
    type?: string;
    disabled?: boolean;
    properties?: BuildTypeParameters;
}
export interface BuildTypeTriggers {
    trigger?: BuildTypeTrigger[];
    count?: number;
}
export interface BuildTypeFeature {
    id: string;
    type?: string;
    disabled?: boolean;
    properties?: BuildTypeParameters;
}
export interface BuildTypeFeatures {
    feature?: BuildTypeFeature[];
    count?: number;
}
export interface BuildTypeDependency {
    id?: string;
    sourceBuildTypeId?: string;
    dependsOnBuildTypeId?: string;
    properties?: BuildTypeParameters;
}
export interface BuildTypeArtifactDependencies {
    'artifact-dependency'?: BuildTypeDependency[];
    count?: number;
}
export interface BuildTypeSnapshotDependencies {
    'snapshot-dependency'?: BuildTypeDependency[];
    count?: number;
}
export interface BuildTypeSettings {
    property?: BuildTypeProperty[];
}
export interface BuildTypeTemplate {
    id: string;
    name?: string;
    projectId?: string;
}
export interface BuildTypeTemplates {
    buildType?: BuildTypeTemplate[];
}
export interface BuildTypeData {
    id?: string;
    name?: string;
    projectId?: string;
    projectName?: string;
    project?: {
        id: string;
        name?: string;
        parentProjectId?: string;
        parentProject?: {
            id: string;
            name?: string;
        };
    };
    description?: string;
    href?: string;
    webUrl?: string;
    paused?: boolean;
    lastBuildDate?: string;
    lastBuildStatus?: string;
    parameters?: BuildTypeParameters;
    'vcs-root-entries'?: BuildTypeVcsRootEntries;
    steps?: BuildTypeSteps;
    triggers?: BuildTypeTriggers;
    features?: BuildTypeFeatures;
    'artifact-dependencies'?: BuildTypeArtifactDependencies;
    'snapshot-dependencies'?: BuildTypeSnapshotDependencies;
    settings?: BuildTypeSettings;
    templates?: BuildTypeTemplates;
}
export interface BuildTypesResponse {
    buildType?: BuildTypeData[];
    count?: number;
    nextHref?: string;
}
export interface ProjectData {
    id?: string;
    name?: string;
    parentProjectId?: string;
    parentProject?: ProjectData;
    archived?: boolean;
    href?: string;
    webUrl?: string;
    description?: string;
}
export interface ProjectsResponse {
    project?: ProjectData[];
    count?: number;
}
export interface BuildTriggered {
    type: string;
    date: string;
    user?: {
        username?: string;
        name?: string;
        id?: number;
    };
}
export interface BuildData {
    id: number;
    number: string;
    status: string;
    state: string;
    buildTypeId: string;
    projectId?: string;
    branchName?: string;
    defaultBranch?: boolean;
    startDate?: string;
    finishDate?: string;
    queuedDate?: string;
    statusText?: string;
    webUrl?: string;
    href?: string;
    triggered?: BuildTriggered;
}
export interface BuildsResponse {
    build?: BuildData[];
    count?: number;
    nextHref?: string;
}
export interface ArtifactFile {
    name: string;
    fullName?: string;
    size?: number;
    modificationTime?: string;
    href?: string;
}
export interface ArtifactsResponse {
    file?: ArtifactFile[];
    count?: number;
}
export interface StatisticsProperty {
    name: string;
    value: string;
}
export interface StatisticsResponse {
    property?: StatisticsProperty[];
    count?: number;
}
export interface ChangeFile {
    name: string;
    changeType?: string;
    beforeRevision?: string;
    afterRevision?: string;
}
export interface ChangeFiles {
    file?: ChangeFile[];
    count?: number;
}
export interface ChangeData {
    id: number;
    version: string;
    username: string;
    date: string;
    comment?: string;
    files?: ChangeFiles;
    href?: string;
    webUrl?: string;
}
export interface ChangesResponse {
    change?: ChangeData[];
    count?: number;
    nextHref?: string;
}
export interface VcsRootProperty {
    name: string;
    value?: string;
}
export interface VcsRootProperties {
    property?: VcsRootProperty[];
    count?: number;
}
export interface VcsRootData {
    id?: string;
    name?: string;
    vcsName?: string;
    href?: string;
    project?: ProjectData;
    properties?: VcsRootProperties;
}
export interface VcsRootsResponse {
    'vcs-root'?: VcsRootData[];
    count?: number;
}
export declare function isBuildTypeData(data: unknown): data is BuildTypeData;
export declare function isBuildTypesResponse(data: unknown): data is BuildTypesResponse;
export declare function isProjectData(data: unknown): data is ProjectData;
export declare function isBuildData(data: unknown): data is BuildData;
export declare function isVcsRootData(data: unknown): data is VcsRootData;
export declare function isVcsRootsResponse(data: unknown): data is VcsRootsResponse;
//# sourceMappingURL=api-responses.d.ts.map