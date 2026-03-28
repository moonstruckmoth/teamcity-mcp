import type { TeamCityClientAdapter } from './client-adapter';
export interface BuildTestStatistics {
    totalTests: number;
    passedTests: number;
    failedTests: number;
    ignoredTests: number;
    mutedTests: number;
    newFailedTests: number;
    successRate: number;
}
export interface TestRun {
    id: string;
    name: string;
    className?: string;
    status: 'SUCCESS' | 'FAILURE' | 'IGNORED' | 'UNKNOWN';
    duration?: number;
    details?: string;
}
export interface BuildProblem {
    id: string;
    type: string;
    identity: string;
    details: string;
    additionalData?: Record<string, string>;
}
export interface CategorizedProblems {
    all: BuildProblem[];
    categorized: Record<string, BuildProblem[]>;
}
export interface TestAndProblemSummary {
    statistics: BuildTestStatistics;
    failedTests?: TestRun[];
    problems?: BuildProblem[] | CategorizedProblems;
    hasIssues: boolean;
    failureReason?: string;
}
export interface SummaryOptions {
    includeFailedTests?: boolean;
    includeProblems?: boolean;
    categorizeProblems?: boolean;
    maxFailedTestsToShow?: number;
    maxProblemsToShow?: number;
}
export declare class TestProblemReporter {
    private readonly client;
    constructor(client: TeamCityClientAdapter);
    private readonly isRecord;
    getTestStatistics(buildId: string): Promise<BuildTestStatistics>;
    getFailedTests(buildId: string, maxResults?: number): Promise<TestRun[]>;
    getBuildProblems(buildId: string, categorize?: boolean): Promise<BuildProblem[] | CategorizedProblems>;
    private ensureTestStatisticsPayload;
    private ensureTestOccurrences;
    private coerceCountField;
    private ensureFailedTestsResponse;
    private ensureProblemOccurrencesResponse;
    getTestAndProblemSummary(buildId: string, options?: SummaryOptions): Promise<TestAndProblemSummary>;
    formatFailureReason(buildId: string): Promise<string>;
    hasIssues(buildId: string): Promise<boolean>;
    getTestTrend(buildTypeId: string, count?: number): Promise<Array<{
        buildId: string;
        statistics: BuildTestStatistics;
    }>>;
    getFailurePatterns(buildTypeId: string, count?: number): Promise<Record<string, number>>;
}
//# sourceMappingURL=test-problem-reporter.d.ts.map