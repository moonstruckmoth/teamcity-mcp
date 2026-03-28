import type { Agent } from './agent';
import type { BuildType } from './build-type';
import type { Requirements } from './requirements';
export interface Compatibility {
    compatible?: boolean;
    agent?: Agent;
    buildType?: BuildType;
    unmetRequirements?: Requirements;
}
//# sourceMappingURL=compatibility.d.ts.map