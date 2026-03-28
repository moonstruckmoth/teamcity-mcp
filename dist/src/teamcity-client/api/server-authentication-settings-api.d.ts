import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { ServerAuthSettings } from '../models';
export declare const ServerAuthenticationSettingsApiAxiosParamCreator: (configuration?: Configuration) => {
    getAuthSettings: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    setAuthSettings: (body?: ServerAuthSettings, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const ServerAuthenticationSettingsApiFp: (configuration?: Configuration) => {
    getAuthSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServerAuthSettings>>;
    setAuthSettings(body?: ServerAuthSettings, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServerAuthSettings>>;
};
export declare const ServerAuthenticationSettingsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getAuthSettings(options?: RawAxiosRequestConfig): AxiosPromise<ServerAuthSettings>;
    setAuthSettings(body?: ServerAuthSettings, options?: RawAxiosRequestConfig): AxiosPromise<ServerAuthSettings>;
};
export interface ServerAuthenticationSettingsApiInterface {
    getAuthSettings(options?: RawAxiosRequestConfig): AxiosPromise<ServerAuthSettings>;
    setAuthSettings(body?: ServerAuthSettings, options?: RawAxiosRequestConfig): AxiosPromise<ServerAuthSettings>;
}
export declare class ServerAuthenticationSettingsApi extends BaseAPI implements ServerAuthenticationSettingsApiInterface {
    getAuthSettings(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ServerAuthSettings, any, {}>>;
    setAuthSettings(body?: ServerAuthSettings, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ServerAuthSettings, any, {}>>;
}
//# sourceMappingURL=server-authentication-settings-api.d.ts.map