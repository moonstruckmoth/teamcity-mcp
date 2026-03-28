import type { Groups } from './groups';
import type { Properties } from './properties';
import type { Roles } from './roles';
import type { Users } from './users';
export interface Group {
    key?: string;
    name?: string;
    href?: string;
    description?: string;
    'parent-groups'?: Groups;
    'child-groups'?: Groups;
    users?: Users;
    roles?: Roles;
    properties?: Properties;
}
//# sourceMappingURL=group.d.ts.map