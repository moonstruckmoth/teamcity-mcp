import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { Plugin } from '../models';
export declare const RootApiAxiosParamCreator: (configuration?: Configuration) => {
    getApiVersion: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getPluginInfo: (fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getRootEndpointsOfRoot: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getVersion: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const RootApiFp: (configuration?: Configuration) => {
    getApiVersion(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    getPluginInfo(fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Plugin>>;
    getRootEndpointsOfRoot(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    getVersion(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const RootApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getApiVersion(options?: RawAxiosRequestConfig): AxiosPromise<string>;
    getPluginInfo(fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Plugin>;
    getRootEndpointsOfRoot(options?: RawAxiosRequestConfig): AxiosPromise<string>;
    getVersion(options?: RawAxiosRequestConfig): AxiosPromise<string>;
};
export interface RootApiInterface {
    getApiVersion(options?: RawAxiosRequestConfig): AxiosPromise<string>;
    getPluginInfo(fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Plugin>;
    getRootEndpointsOfRoot(options?: RawAxiosRequestConfig): AxiosPromise<string>;
    getVersion(options?: RawAxiosRequestConfig): AxiosPromise<string>;
}
export declare class RootApi extends BaseAPI implements RootApiInterface {
    getApiVersion(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any, {}>>;
    getPluginInfo(fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Plugin, any, {}>>;
    getRootEndpointsOfRoot(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any, {}>>;
    getVersion(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any, {}>>;
}
//# sourceMappingURL=root-api.d.ts.map