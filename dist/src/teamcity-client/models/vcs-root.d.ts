import type { Items } from './items';
import type { Project } from './project';
import type { Properties } from './properties';
import type { VcsRootInstances } from './vcs-root-instances';
export interface VcsRoot {
    id?: string;
    internalId?: string;
    uuid?: string;
    name?: string;
    vcsName?: string;
    modificationCheckInterval?: number;
    href?: string;
    project?: Project;
    properties?: Properties;
    vcsRootInstances?: VcsRootInstances;
    repositoryIdStrings?: Items;
    locator?: string;
    projectLocator?: string;
}
//# sourceMappingURL=vcs-root.d.ts.map