import { EventEmitter } from 'events';
import type { ResolvedBuildConfiguration } from './build-configuration-resolver';
import type { ParameterSet } from './build-parameters-manager';
import type { TeamCityClientAdapter } from './client-adapter';
export interface QueueBuildOptions {
    buildConfiguration: ResolvedBuildConfiguration;
    parameters?: ParameterSet;
    branch?: string;
    personal?: boolean;
    moveToTop?: boolean;
    comment?: string;
    dependencies?: {
        buildId: string;
        waitForFinish?: boolean;
    }[];
}
export interface QueuedBuild {
    buildId: string;
    buildTypeId: string;
    branchName?: string;
    queuePosition: number;
    queuedDate: Date;
    estimatedStartTime?: Date;
    estimatedDuration?: number;
    webUrl: string;
    personal: boolean;
    triggeredBy: string;
    parameters: Record<string, string>;
}
export interface BuildStatus {
    buildId: string;
    state: 'queued' | 'running' | 'finished' | 'failed' | 'canceled';
    status?: 'SUCCESS' | 'FAILURE' | 'ERROR' | 'UNKNOWN';
    statusText?: string;
    percentageComplete?: number;
    currentStageText?: string;
    elapsedTime?: number;
    estimatedTotalTime?: number;
    webUrl: string;
    startDate?: Date;
    finishDate?: Date;
    artifacts?: {
        count: number;
        href: string;
    };
    tests?: {
        count: number;
        passed: number;
        failed: number;
        ignored: number;
    };
}
export interface QueuePosition {
    buildId: string;
    position: number;
    estimatedStartTime?: Date;
    estimatedWaitTime?: number;
    canMoveToTop: boolean;
    blockedBy?: string[];
}
export interface QueueLimitations {
    maxConcurrentBuilds?: number;
    currentlyRunning: number;
    queuedBuilds: number;
    availableAgents: number;
    personalBuildLimit?: number;
    userPersonalBuilds?: number;
}
export declare class BuildQueueManager extends EventEmitter {
    private client;
    private maxRetries;
    private retryDelay;
    private pollingInterval;
    private activeMonitors;
    constructor(client: TeamCityClientAdapter, options?: {
        maxRetries?: number;
        retryDelay?: number;
        pollingInterval?: number;
    });
    queueBuild(options: QueueBuildOptions): Promise<QueuedBuild>;
    queueBuilds(builds: QueueBuildOptions[]): Promise<QueuedBuild[]>;
    getQueuePosition(buildId: string): Promise<QueuePosition>;
    moveToTop(buildId: string): Promise<QueuePosition>;
    reorderQueue(buildIds: string[]): Promise<QueuePosition[]>;
    getBuildStatus(buildId: string): Promise<BuildStatus>;
    monitorBuild(buildId: string, callback: (status: BuildStatus) => void, options?: {
        pollInterval?: number;
        timeout?: number;
    }): Promise<void>;
    stopMonitoring(buildId: string): void;
    stopAllMonitoring(): void;
    cancelBuild(buildId: string, comment?: string): Promise<void>;
    getQueueLimitations(buildTypeId: string): Promise<QueueLimitations>;
    private validateDependencies;
    private retryOperation;
    private mapToQueuedBuild;
    private extractParameters;
    private mapBuildState;
    private findBlockingBuilds;
    private estimateWaitTime;
}
//# sourceMappingURL=build-queue-manager.d.ts.map