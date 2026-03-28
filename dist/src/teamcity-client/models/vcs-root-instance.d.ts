import type { Items } from './items';
import type { Properties } from './properties';
import type { RepositoryState } from './repository-state';
import type { VcsRoot } from './vcs-root';
import type { VcsStatus } from './vcs-status';
export interface VcsRootInstance {
    id?: string;
    'vcs-root-id'?: string;
    vcsRootInternalId?: string;
    name?: string;
    vcsName?: string;
    modificationCheckInterval?: number;
    commitHookMode?: boolean;
    lastVersion?: string;
    lastVersionInternal?: string;
    href?: string;
    'vcs-root'?: VcsRoot;
    status?: VcsStatus;
    repositoryState?: RepositoryState;
    properties?: Properties;
    repositoryIdStrings?: Items;
    projectLocator?: string;
}
//# sourceMappingURL=vcs-root-instance.d.ts.map