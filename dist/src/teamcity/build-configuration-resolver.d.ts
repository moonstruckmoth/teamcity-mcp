import type { Logger } from 'winston';
import type { TeamCityUnifiedClient } from './types/client';
export interface ResolvedBuildConfiguration {
    id: string;
    name: string;
    projectId: string;
    projectName: string;
    webUrl?: string;
    description?: string;
    paused: boolean;
    templateFlag: boolean;
    allowPersonalBuilds: boolean;
    vcsRootIds?: string[];
    parameters?: Record<string, string>;
}
export interface ResolutionContext {
    commitHash?: string;
    pullRequestNumber?: string;
    issueKey?: string;
    branch?: string;
    projectHint?: string;
    additionalContext?: string;
}
export interface NameResolutionOptions {
    projectName: string;
    buildTypeName: string;
    additionalContext?: string;
}
export interface BuildConfigurationMatch {
    configuration: ResolvedBuildConfiguration;
    score: number;
    matchedOn: string[];
}
export interface ResolverOptions {
    fuzzyMatchThreshold?: number;
    maxCacheSize?: number;
    cacheEnabled?: boolean;
}
export interface BatchResolutionRequest {
    type: 'id' | 'name' | 'context';
    value: string | NameResolutionOptions | ResolutionContext;
}
export declare class BuildConfigurationNotFoundError extends Error {
    readonly searchCriteria?: unknown | undefined;
    constructor(message: string, searchCriteria?: unknown | undefined);
}
export declare class AmbiguousBuildConfigurationError extends Error {
    readonly candidates: ResolvedBuildConfiguration[];
    readonly suggestions: string[];
    constructor(message: string, candidates: ResolvedBuildConfiguration[], suggestions: string[]);
}
export declare class BuildConfigurationPermissionError extends Error {
    readonly configurationId?: string | undefined;
    constructor(message: string, configurationId?: string | undefined);
}
export declare class BuildConfigurationCache {
    private cache;
    private readonly ttl;
    private readonly maxSize;
    constructor(options?: {
        ttl?: number;
        maxSize?: number;
    });
    get(key: string): ResolvedBuildConfiguration | undefined;
    set(key: string, data: ResolvedBuildConfiguration): void;
    clear(): void;
    delete(key: string): boolean;
}
export declare class BuildConfigurationResolver {
    private client;
    private logger;
    private cache;
    private fuzzyMatchThreshold;
    constructor(config: {
        client: TeamCityUnifiedClient;
        logger: Logger;
        cache?: BuildConfigurationCache;
        options?: ResolverOptions;
    });
    resolveByConfigurationId(configurationId: string, _options?: {
        checkPermissions?: boolean;
    }): Promise<ResolvedBuildConfiguration>;
    resolveByName(options: NameResolutionOptions): Promise<ResolvedBuildConfiguration>;
    resolveFromContext(context: ResolutionContext): Promise<ResolvedBuildConfiguration>;
    findFuzzyMatches(query: string): Promise<BuildConfigurationMatch[]>;
    resolveBatch(requests: BatchResolutionRequest[], options?: {
        allowPartialFailure?: boolean;
    }): Promise<ResolvedBuildConfiguration[]>;
    resolve(input: string): Promise<ResolvedBuildConfiguration>;
    private getAllBuildTypes;
    private normalizeBuildType;
    private fuzzyMatch;
    private levenshteinDistance;
}
//# sourceMappingURL=build-configuration-resolver.d.ts.map