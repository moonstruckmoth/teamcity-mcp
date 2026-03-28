import { EventEmitter } from 'events';
import type { BuildStatusManager, BuildStatusResult } from './build-status-manager';
export interface ProgressUpdate extends BuildStatusResult {
    velocity?: number;
    estimatedTimeRemaining?: number;
    isOverdue?: boolean;
    overdueSeconds?: number;
    stageDuration?: number;
    stageProgress?: number;
}
export interface ProgressOptions {
    pollingInterval?: number;
    calculateVelocity?: boolean;
    useHistoricalData?: boolean;
    trackStages?: boolean;
    calculateStageMetrics?: boolean;
    includeTests?: boolean;
    includeProblems?: boolean;
    stallThreshold?: number;
    maxRetries?: number;
    maxDuration?: number;
}
export interface StageMetrics {
    stageName: string;
    duration: number;
    percentageOfBuild: number;
    startProgress: number;
    endProgress: number;
}
export declare class BuildProgressTracker {
    private statusManager;
    private tracking;
    private historicalAverages;
    constructor(statusManager: BuildStatusManager);
    trackBuildProgress(buildId: string, options?: ProgressOptions): EventEmitter;
    pollOnce(buildId: string): Promise<BuildStatusResult | null>;
    stopTracking(buildId: string): void;
    stopAllTracking(): void;
    getActiveTracking(): string[];
    getTrackingInfo(buildId: string): unknown;
    setHistoricalAverage(buildTypeId: string, averageDuration: number): void;
    private schedulePoll;
    private pollBuildStatus;
    private processStatusUpdate;
    private calculateStageMetrics;
    private emitEvents;
    private handlePollError;
}
//# sourceMappingURL=build-progress-tracker.d.ts.map