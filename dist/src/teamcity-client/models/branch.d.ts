import type { Builds } from './builds';
export interface Branch {
    name?: string;
    internalName?: string;
    default?: boolean;
    unspecified?: boolean;
    active?: boolean;
    lastActivity?: string;
    groupFlag?: boolean;
    builds?: Builds;
}
//# sourceMappingURL=branch.d.ts.map