import type { Groups } from './groups';
import type { Properties } from './properties';
import type { Roles } from './roles';
import type { UserAvatars } from './user-avatars';
export interface User {
    username?: string;
    name?: string;
    id?: number;
    email?: string;
    lastLogin?: string;
    password?: string;
    hasPassword?: boolean;
    realm?: string;
    href?: string;
    properties?: Properties;
    roles?: Roles;
    groups?: Groups;
    locator?: string;
    avatars?: UserAvatars;
    enabled2FA?: boolean;
}
//# sourceMappingURL=user.d.ts.map