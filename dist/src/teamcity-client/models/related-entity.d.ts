import type { Agent } from './agent';
import type { AgentPool } from './agent-pool';
import type { Build } from './build';
import type { BuildType } from './build-type';
import type { Change } from './change';
import type { Group } from './group';
import type { Problem } from './problem';
import type { Project } from './project';
import type { Test } from './test';
import type { User } from './user';
import type { VcsRoot } from './vcs-root';
export interface RelatedEntity {
    type?: string;
    unknown?: boolean;
    internalId?: string;
    text?: string;
    build?: Build;
    buildType?: BuildType;
    project?: Project;
    user?: User;
    group?: Group;
    test?: Test;
    problem?: Problem;
    agent?: Agent;
    vcsRoot?: VcsRoot;
    change?: Change;
    agentPool?: AgentPool;
}
//# sourceMappingURL=related-entity.d.ts.map