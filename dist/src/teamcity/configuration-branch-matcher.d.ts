import type { Logger } from 'winston';
import { type BranchSpec, BranchSpecificationParser } from './branch-specification-parser';
import type { TeamCityUnifiedClient } from './types/client';
export interface VcsRootInfo {
    id: string;
    name: string;
    defaultBranch?: string;
    url?: string;
}
export interface MatchedConfiguration {
    id: string;
    name: string;
    projectId: string;
    matchedSpec: string;
    confidence: number;
    vcsRoots?: VcsRootInfo[];
}
export interface ConfigurationBranches {
    configId: string;
    configName: string;
    defaultBranch?: string;
    branchSpecs: BranchSpec[];
    vcsRoots: VcsRootInfo[];
}
export declare class ConfigurationBranchMatcher {
    private readonly client;
    private readonly logger;
    private parser;
    constructor(client: TeamCityUnifiedClient, logger: Logger, parser?: BranchSpecificationParser);
    getConfigurationsForBranch(projectId: string, branchName: string): Promise<MatchedConfiguration[]>;
    getBranchesForConfiguration(configId: string): Promise<ConfigurationBranches>;
    private extractBranchSpecification;
    private extractVcsRoots;
    private testBranchAgainstSpec;
    private calculateConfidence;
}
//# sourceMappingURL=configuration-branch-matcher.d.ts.map