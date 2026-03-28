import type { BuildType } from './build-type';
import type { Properties } from './properties';
export interface ArtifactDependency {
    id?: string;
    name?: string;
    type?: string;
    disabled?: boolean;
    inherited?: boolean;
    href?: string;
    properties?: Properties;
    'source-buildType'?: BuildType;
}
//# sourceMappingURL=artifact-dependency.d.ts.map