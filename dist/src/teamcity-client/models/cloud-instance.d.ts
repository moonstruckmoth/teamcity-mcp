import type { Agent } from './agent';
import type { CloudError } from './cloud-error';
import type { CloudImage } from './cloud-image';
export interface CloudInstance {
    id?: string;
    name?: string;
    state?: string;
    startDate?: string;
    networkAddress?: string;
    href?: string;
    image?: CloudImage;
    agent?: Agent;
    errorMessage?: string;
    error?: CloudError;
}
//# sourceMappingURL=cloud-instance.d.ts.map