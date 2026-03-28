import type { AuthModules } from './auth-modules';
export interface ServerAuthSettings {
    allowGuest?: boolean;
    guestUsername?: string;
    welcomeText?: string;
    collapseLoginForm?: boolean;
    perProjectPermissions?: boolean;
    emailVerification?: boolean;
    buildAuthenticationMode?: string;
    modules?: AuthModules;
}
//# sourceMappingURL=server-auth-settings.d.ts.map