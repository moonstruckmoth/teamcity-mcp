import type { TeamCityClientAdapter } from './types/client';
type DependencyType = 'artifact' | 'snapshot';
type ManageDependencyInput = {
    buildTypeId: string;
    dependencyType: DependencyType;
    dependsOn?: string;
    properties?: Record<string, unknown>;
    options?: Record<string, unknown>;
    type?: string;
    disabled?: boolean;
};
export declare class BuildDependencyManager {
    private readonly client;
    constructor(client: TeamCityClientAdapter);
    addDependency(input: ManageDependencyInput): Promise<{
        id: string;
    }>;
    updateDependency(dependencyId: string, input: ManageDependencyInput): Promise<{
        id: string;
    }>;
    deleteDependency(dependencyType: DependencyType, buildTypeId: string, dependencyId: string): Promise<void>;
    private createDependency;
    private replaceDependency;
    private fetchDependency;
    private buildPayload;
    private isNotFound;
}
export {};
//# sourceMappingURL=build-dependency-manager.d.ts.map