import type { TeamCityClientAdapter } from './types/client';
interface ManageFeatureInput {
    buildTypeId: string;
    type?: string;
    featureId?: string;
    properties?: Record<string, unknown>;
    disabled?: boolean;
}
export declare class BuildFeatureManager {
    private readonly client;
    constructor(client: TeamCityClientAdapter);
    addFeature(input: ManageFeatureInput): Promise<{
        id: string;
    }>;
    updateFeature(featureId: string, input: ManageFeatureInput): Promise<{
        id: string;
    }>;
    deleteFeature(buildTypeId: string, featureId: string): Promise<void>;
    private fetchFeature;
    private buildPayload;
}
export {};
//# sourceMappingURL=build-feature-manager.d.ts.map