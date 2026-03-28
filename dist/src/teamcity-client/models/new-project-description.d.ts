import type { Project } from './project';
import type { Properties } from './properties';
export interface NewProjectDescription {
    copyAllAssociatedSettings?: boolean;
    projectsIdsMap?: Properties;
    buildTypesIdsMap?: Properties;
    vcsRootsIdsMap?: Properties;
    name?: string;
    id?: string;
    sourceProjectLocator?: string;
    sourceProject?: Project;
    parentProject?: Project;
    description?: string;
}
//# sourceMappingURL=new-project-description.d.ts.map