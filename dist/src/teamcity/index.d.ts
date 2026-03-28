import { type TeamCityClientAdapter } from './client-adapter';
import { type TeamCityFullConfig } from './config';
export * from './client-adapter';
export * from './auth';
export * from './errors';
export * from './circuit-breaker';
export * from './pagination';
export * from './config';
export * from '../teamcity-client/configuration';
export declare function initializeTeamCity(config?: Partial<TeamCityFullConfig>): Promise<TeamCityClientAdapter>;
export declare function getTeamCityClient(): TeamCityClientAdapter;
export declare function createTeamCityClient(config?: Partial<TeamCityFullConfig>): TeamCityClientAdapter;
export declare function resetTeamCityClient(): void;
interface BuildData {
    id?: string;
    number?: number;
    status?: string;
    state?: string;
    branchName?: string;
    buildType?: {
        id: string;
        name: string;
    };
}
interface TestOccurrence {
    id?: string;
    name?: string;
    status?: string;
    ignored?: boolean;
    details?: string;
}
export declare function getProjectBuilds(projectId: string): Promise<BuildData[]>;
export declare function triggerBuild(buildTypeId: string, branchName?: string, comment?: string): Promise<BuildData>;
export declare function cancelBuild(buildId: number, comment?: string): Promise<void>;
export declare function getBuildStatus(buildId: number): Promise<{
    state: string;
    status: string;
    statusText: string;
}>;
export declare function getBuildTestResults(buildId: number): Promise<{
    total: number;
    passed: number;
    failed: number;
    ignored: number;
    failures: TestOccurrence[];
}>;
export declare function getBuildLog(buildId: number): Promise<string>;
//# sourceMappingURL=index.d.ts.map