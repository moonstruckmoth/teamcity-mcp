import type { ArtifactDownloadInfo } from './artifact-download-info';
import type { Build } from './build';
export interface DownloadInfo {
    build?: Build;
    artifactInfo?: Array<ArtifactDownloadInfo>;
    count?: number;
}
//# sourceMappingURL=download-info.d.ts.map