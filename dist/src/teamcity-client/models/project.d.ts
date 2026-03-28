import type { BuildType } from './build-type';
import type { BuildTypes } from './build-types';
import type { CloudProfiles } from './cloud-profiles';
import type { DeploymentDashboards } from './deployment-dashboards';
import type { Links } from './links';
import type { ProjectFeatures } from './project-features';
import type { Projects } from './projects';
import type { Properties } from './properties';
import type { StateField } from './state-field';
import type { VcsRoots } from './vcs-roots';
export interface Project {
    id?: string;
    internalId?: string;
    uuid?: string;
    name?: string;
    parentProjectId?: string;
    parentProjectInternalId?: string;
    parentProjectName?: string;
    archived?: boolean;
    virtual?: boolean;
    description?: string;
    href?: string;
    webUrl?: string;
    links?: Links;
    parentProject?: Project;
    readOnlyUI?: StateField;
    defaultTemplate?: BuildType;
    buildTypes?: BuildTypes;
    templates?: BuildTypes;
    deploymentDashboards?: DeploymentDashboards;
    parameters?: Properties;
    vcsRoots?: VcsRoots;
    projectFeatures?: ProjectFeatures;
    projects?: Projects;
    cloudProfiles?: CloudProfiles;
    ancestorProjects?: Projects;
    locator?: string;
}
//# sourceMappingURL=project.d.ts.map