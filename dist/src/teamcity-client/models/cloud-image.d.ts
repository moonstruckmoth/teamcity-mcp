import type { CloudError } from './cloud-error';
import type { CloudInstances } from './cloud-instances';
import type { CloudProfile } from './cloud-profile';
export interface CloudImage {
    id?: string;
    name?: string;
    href?: string;
    profile?: CloudProfile;
    instances?: CloudInstances;
    errorMessage?: string;
    error?: CloudError;
    agentTypeId?: number;
    agentPoolId?: number;
    operatingSystemName?: string;
    webUrl?: string;
    locator?: string;
}
//# sourceMappingURL=cloud-image.d.ts.map