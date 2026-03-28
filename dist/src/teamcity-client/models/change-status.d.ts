import type { Builds } from './builds';
export interface ChangeStatus {
    runningSuccessfullyBuilds?: number;
    pendingBuildTypes?: number;
    totalProblems?: number;
    newFailedTests?: number;
    otherFailedTests?: number;
    queuedBuildsCount?: number;
    criticalBuilds?: Builds;
    notCriticalBuilds?: Builds;
    newTestsFailedBuilds?: Builds;
    compilationErrorBuilds?: Builds;
    finishedBuilds?: number;
    runningBuilds?: number;
    failedBuilds?: number;
    cancelledBuilds?: number;
    successfulBuilds?: number;
}
//# sourceMappingURL=change-status.d.ts.map