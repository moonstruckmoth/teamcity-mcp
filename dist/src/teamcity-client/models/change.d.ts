import type { ChangeStatus } from './change-status';
import type { Changes } from './changes';
import type { Commiter } from './commiter';
import type { FileChanges } from './file-changes';
import type { Items } from './items';
import type { Properties } from './properties';
import type { SnapshotDependencyLink } from './snapshot-dependency-link';
import type { User } from './user';
import type { VcsRootInstance } from './vcs-root-instance';
export interface Change {
    id?: number;
    version?: string;
    internalVersion?: string;
    username?: string;
    date?: string;
    registrationDate?: string;
    personal?: boolean;
    href?: string;
    webUrl?: string;
    comment?: string;
    user?: User;
    type?: string;
    snapshotDependencyLink?: SnapshotDependencyLink;
    files?: FileChanges;
    vcsRootInstance?: VcsRootInstance;
    parentChanges?: Changes;
    parentRevisions?: Items;
    attributes?: Properties;
    storesProjectSettings?: boolean;
    status?: ChangeStatus;
    commiter?: Commiter;
    canEditComment?: boolean;
    locator?: string;
}
//# sourceMappingURL=change.d.ts.map