import type { TeamCityAPI, TeamCityAPIClientConfig } from '../api-client';
import type { TeamCityFullConfig } from '../teamcity/config';
import type { TeamCityClientAdapter } from './types/client';
export type { TeamCityClientAdapter } from './types/client';
interface AdapterOptions {
    fullConfig?: TeamCityFullConfig;
    apiConfig?: TeamCityAPIClientConfig;
}
export declare function createAdapterFromTeamCityAPI(api: TeamCityAPI, options?: AdapterOptions): TeamCityClientAdapter;
//# sourceMappingURL=client-adapter.d.ts.map