import type { Href } from './href';
export interface Server {
    version?: string;
    versionMajor?: number;
    versionMinor?: number;
    startTime?: string;
    currentTime?: string;
    buildNumber?: string;
    buildDate?: string;
    internalId?: string;
    role?: string;
    webUrl?: string;
    projects?: Href;
    vcsRoots?: Href;
    builds?: Href;
    users?: Href;
    userGroups?: Href;
    agents?: Href;
    buildQueue?: Href;
    agentPools?: Href;
    investigations?: Href;
    mutes?: Href;
    artifactsUrl?: string;
    nodes?: Href;
}
//# sourceMappingURL=server.d.ts.map