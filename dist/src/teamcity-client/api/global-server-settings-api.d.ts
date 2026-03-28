import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { ServerGlobalSettings } from '../models';
export declare const GlobalServerSettingsApiAxiosParamCreator: (configuration?: Configuration) => {
    getGlobalSettings: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    setGlobalSettings: (body?: ServerGlobalSettings, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const GlobalServerSettingsApiFp: (configuration?: Configuration) => {
    getGlobalSettings(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServerGlobalSettings>>;
    setGlobalSettings(body?: ServerGlobalSettings, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServerGlobalSettings>>;
};
export declare const GlobalServerSettingsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getGlobalSettings(options?: RawAxiosRequestConfig): AxiosPromise<ServerGlobalSettings>;
    setGlobalSettings(body?: ServerGlobalSettings, options?: RawAxiosRequestConfig): AxiosPromise<ServerGlobalSettings>;
};
export interface GlobalServerSettingsApiInterface {
    getGlobalSettings(options?: RawAxiosRequestConfig): AxiosPromise<ServerGlobalSettings>;
    setGlobalSettings(body?: ServerGlobalSettings, options?: RawAxiosRequestConfig): AxiosPromise<ServerGlobalSettings>;
}
export declare class GlobalServerSettingsApi extends BaseAPI implements GlobalServerSettingsApiInterface {
    getGlobalSettings(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ServerGlobalSettings, any, {}>>;
    setGlobalSettings(body?: ServerGlobalSettings, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ServerGlobalSettings, any, {}>>;
}
//# sourceMappingURL=global-server-settings-api.d.ts.map