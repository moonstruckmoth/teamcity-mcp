import type { TeamCityClientAdapter } from './types/client';
interface ManageRequirementInput {
    buildTypeId: string;
    requirementId?: string;
    type?: string;
    properties?: Record<string, unknown>;
    disabled?: boolean;
}
export declare class AgentRequirementsManager {
    private readonly client;
    constructor(client: TeamCityClientAdapter);
    addRequirement(input: ManageRequirementInput): Promise<{
        id: string;
    }>;
    updateRequirement(requirementId: string, input: ManageRequirementInput): Promise<{
        id: string;
    }>;
    deleteRequirement(buildTypeId: string, requirementId: string): Promise<void>;
    private fetchRequirement;
    private buildPayload;
}
export {};
//# sourceMappingURL=agent-requirements-manager.d.ts.map