import type { Builds } from './builds';
export interface BranchVersion {
    version?: string;
    lastActivity?: string;
    builds?: Builds;
    unspecified?: boolean;
    name?: string;
    default?: boolean;
    active?: boolean;
    internalName?: string;
    groupFlag?: boolean;
}
//# sourceMappingURL=branch-version.d.ts.map