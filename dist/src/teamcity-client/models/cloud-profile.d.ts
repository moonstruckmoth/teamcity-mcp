import type { CloudError } from './cloud-error';
import type { CloudImages } from './cloud-images';
import type { Project } from './project';
export interface CloudProfile {
    id?: string;
    name?: string;
    cloudProviderId?: string;
    href?: string;
    project?: Project;
    images?: CloudImages;
    error?: CloudError;
}
//# sourceMappingURL=cloud-profile.d.ts.map