import type { DisabledResponsibilities } from './disabled-responsibilities';
import type { EffectiveResponsibilities } from './effective-responsibilities';
import type { EnabledResponsibilities } from './enabled-responsibilities';
export interface Node {
    id?: string;
    url?: string;
    state?: NodeStateEnum;
    role?: string;
    current?: boolean;
    enabledResponsibilities?: EnabledResponsibilities;
    disabledResponsibilities?: DisabledResponsibilities;
    effectiveResponsibilities?: EffectiveResponsibilities;
}
export declare const NodeStateEnum: {
    readonly Online: "online";
    readonly Offline: "offline";
    readonly Stopping: "stopping";
    readonly Starting: "starting";
};
export type NodeStateEnum = (typeof NodeStateEnum)[keyof typeof NodeStateEnum];
//# sourceMappingURL=node.d.ts.map