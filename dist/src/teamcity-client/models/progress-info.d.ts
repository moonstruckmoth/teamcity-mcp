import type { Build } from './build';
export interface ProgressInfo {
    percentageComplete?: number;
    elapsedSeconds?: number;
    estimatedTotalSeconds?: number;
    leftSeconds?: number;
    currentStageText?: string;
    outdated?: boolean;
    probablyHanging?: boolean;
    lastActivityTime?: string;
    outdatedReasonBuild?: Build;
}
//# sourceMappingURL=progress-info.d.ts.map