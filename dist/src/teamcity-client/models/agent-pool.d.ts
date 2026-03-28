import type { AgentTypes } from './agent-types';
import type { Agents } from './agents';
import type { Project } from './project';
import type { Projects } from './projects';
export interface AgentPool {
    id?: number;
    name?: string;
    href?: string;
    maxAgents?: number;
    ownerProject?: Project;
    projects?: Projects;
    agents?: Agents;
    locator?: string;
    agentTypes?: AgentTypes;
}
//# sourceMappingURL=agent-pool.d.ts.map