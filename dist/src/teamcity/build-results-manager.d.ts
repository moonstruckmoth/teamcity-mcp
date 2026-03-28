import type { TeamCityUnifiedClient } from './types/client';
type ArtifactEncoding = 'base64' | 'stream';
interface ArtifactDownloadHandle {
    tool: 'download_build_artifact';
    args: {
        buildId: string;
        artifactPath: string;
        encoding?: 'stream';
        maxSize?: number;
    };
}
export interface BuildResultsOptions {
    includeArtifacts?: boolean;
    includeStatistics?: boolean;
    includeChanges?: boolean;
    includeDependencies?: boolean;
    artifactFilter?: string;
    downloadArtifacts?: string[];
    maxArtifactSize?: number;
    artifactEncoding?: ArtifactEncoding;
}
export interface BuildResult {
    build: {
        id: number;
        number: string;
        status: string;
        state: string;
        buildTypeId: string;
        projectId?: string;
        branchName?: string;
        startDate?: string;
        finishDate?: string;
        duration?: number;
        queuedDate?: string;
        triggered?: {
            type: string;
            user?: string;
            date: string;
        };
        statusText: string;
        webUrl: string;
    };
    artifacts?: Array<{
        name: string;
        path: string;
        size: number;
        modificationTime: string;
        downloadUrl: string;
        content?: string;
        downloadHandle?: ArtifactDownloadHandle;
    }>;
    statistics?: {
        buildDuration?: number;
        testCount?: number;
        passedTests?: number;
        failedTests?: number;
        ignoredTests?: number;
        codeCoverage?: number;
        [key: string]: unknown;
    };
    changes?: Array<{
        revision: string;
        author: string;
        date: string;
        comment: string;
        files: Array<{
            path: string;
            changeType: string;
        }>;
    }>;
    dependencies?: Array<{
        buildId: number;
        buildNumber: string;
        buildTypeId: string;
        status: string;
    }>;
}
export declare class BuildResultsManager {
    private client;
    private cache;
    private static readonly cacheTtlMs;
    private static readonly defaultMaxArtifactSize;
    private static readonly fields;
    constructor(client: TeamCityUnifiedClient);
    getBuildResults(buildId: string, options?: BuildResultsOptions): Promise<BuildResult>;
    private fetchBuildSummary;
    private transformBuildData;
    private ensureBuildSummary;
    private fetchArtifacts;
    private filterArtifacts;
    private ensureArtifactListResponse;
    private ensureStatisticsResponse;
    private ensureChangesResponse;
    private ensureDependenciesResponse;
    private fetchStatistics;
    private fetchChanges;
    private fetchDependencies;
    private buildAbsoluteUrl;
    private getBaseUrl;
    private downloadArtifactContent;
    private parseTeamCityDate;
    private getCacheKey;
    private isAxiosNotFound;
    private getFromCache;
    private cacheResult;
    private cleanCache;
}
export {};
//# sourceMappingURL=build-results-manager.d.ts.map