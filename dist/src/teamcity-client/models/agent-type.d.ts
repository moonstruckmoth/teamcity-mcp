import type { Environment } from './environment';
import type { Properties } from './properties';
export interface AgentType {
    buildParameters?: Properties;
    configurationParameters?: Properties;
    availableParameters?: Properties;
    environment?: Environment;
    systemParameters?: Properties;
    environmentParameters?: Properties;
    isCloud?: boolean;
    name?: string;
    id?: number;
}
//# sourceMappingURL=agent-type.d.ts.map