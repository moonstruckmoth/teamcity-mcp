import type { MatrixBuildFeatureDescriptor } from './matrix-build-feature-descriptor';
import type { MatrixDependencies } from './matrix-dependencies';
export interface MatrixConfiguration {
    default?: boolean;
    parameters?: MatrixBuildFeatureDescriptor;
    enabled?: boolean;
    dependencies?: MatrixDependencies;
}
//# sourceMappingURL=matrix-configuration.d.ts.map