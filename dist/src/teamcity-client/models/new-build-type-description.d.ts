import type { BuildType } from './build-type';
import type { Properties } from './properties';
export interface NewBuildTypeDescription {
    copyAllAssociatedSettings?: boolean;
    projectsIdsMap?: Properties;
    buildTypesIdsMap?: Properties;
    vcsRootsIdsMap?: Properties;
    name?: string;
    id?: string;
    sourceBuildTypeLocator?: string;
    sourceBuildType?: BuildType;
}
//# sourceMappingURL=new-build-type-description.d.ts.map