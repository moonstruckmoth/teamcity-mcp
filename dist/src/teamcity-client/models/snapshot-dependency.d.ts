import type { BuildType } from './build-type';
import type { Properties } from './properties';
export interface SnapshotDependency {
    id?: string;
    name?: string;
    type?: string;
    disabled?: boolean;
    inherited?: boolean;
    href?: string;
    properties?: Properties;
    'source-buildType'?: BuildType;
}
//# sourceMappingURL=snapshot-dependency.d.ts.map