import type { TeamCityUnifiedClient } from './types/client';
export interface BranchInfo {
    name: string;
    displayName: string;
    isDefault: boolean;
    isActive: boolean;
    buildCount: number;
    lastBuild?: {
        id: string;
        number: string;
        status: string;
        date: string;
        webUrl?: string;
    };
    firstSeenDate?: string;
    lastActivityDate?: string;
    vcsRoot?: {
        id: string;
        name: string;
        url: string;
    };
}
export interface DiscoveryOptions {
    limit?: number;
    fromDate?: Date;
    toDate?: Date;
    includeVcsInfo?: boolean;
}
export declare class BranchDiscoveryManager {
    private readonly client;
    constructor(client: TeamCityUnifiedClient);
    discoverBranchesFromHistory(buildTypeId: string, options?: DiscoveryOptions): Promise<BranchInfo[]>;
    enrichBranchWithBuildInfo(branch: BranchInfo, buildTypeId: string): Promise<BranchInfo>;
    detectBranchActivity(branch: BranchInfo, thresholdDays?: number): BranchInfo;
    parseBranchDisplayName(branchName: string): string;
    private parseDate;
    private extractVcsUrl;
}
//# sourceMappingURL=branch-discovery-manager.d.ts.map