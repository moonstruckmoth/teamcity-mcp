import type { Readable } from 'node:stream';
import type { TeamCityClientAdapter } from './client-adapter';
export interface ArtifactInfo {
    name: string;
    path: string;
    size: number;
    modificationTime?: string;
    downloadUrl: string;
    isDirectory?: boolean;
}
export interface ArtifactListOptions {
    nameFilter?: string;
    pathFilter?: string;
    extension?: string;
    minSize?: number;
    maxSize?: number;
    includeNested?: boolean;
    limit?: number;
    offset?: number;
    forceRefresh?: boolean;
}
export interface ArtifactDownloadOptions {
    encoding?: 'base64' | 'text' | 'buffer' | 'stream';
    maxSize?: number;
}
export interface ArtifactContent {
    name: string;
    path: string;
    size: number;
    content?: string | Buffer | Readable;
    mimeType?: string;
    error?: string;
}
export declare class ArtifactManager {
    private readonly client;
    private cache;
    private static readonly cacheTtlMs;
    private static readonly defaultLimit;
    private static readonly maxLimit;
    private static readonly artifactRetryAttempts;
    private static readonly artifactRetryDelayMs;
    constructor(client: TeamCityClientAdapter);
    private getBaseUrl;
    listArtifacts(buildId: string, options?: ArtifactListOptions): Promise<ArtifactInfo[]>;
    downloadArtifact(buildId: string, artifactPath: string, options?: ArtifactDownloadOptions): Promise<ArtifactContent>;
    downloadMultipleArtifacts(buildId: string, artifactPaths: string[], options?: ArtifactDownloadOptions): Promise<ArtifactContent[]>;
    private ensureArtifactListingResponse;
    private parseArtifacts;
    private buildArtifactSegments;
    private segmentsStartWithParent;
    private encodeArtifactPath;
    private ensureBinaryBuffer;
    private isReadableStream;
    private applyFilters;
    private globToRegex;
    private paginate;
    private getCacheKey;
    private getFromCache;
    private cacheResult;
    private cleanCache;
    private delay;
}
//# sourceMappingURL=artifact-manager.d.ts.map