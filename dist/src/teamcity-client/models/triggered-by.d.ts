import type { Build } from './build';
import type { BuildType } from './build-type';
import type { Properties } from './properties';
import type { User } from './user';
export interface TriggeredBy {
    type?: string;
    details?: string;
    date?: string;
    displayText?: string;
    rawValue?: string;
    user?: User;
    build?: Build;
    buildType?: BuildType;
    properties?: Properties;
}
//# sourceMappingURL=triggered-by.d.ts.map