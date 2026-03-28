import type { BuildTriggerCustomization } from './build-trigger-customization';
import type { Properties } from './properties';
export interface Trigger {
    id?: string;
    name?: string;
    type?: string;
    disabled?: boolean;
    inherited?: boolean;
    href?: string;
    properties?: Properties;
    buildCustomization?: BuildTriggerCustomization;
}
//# sourceMappingURL=trigger.d.ts.map