import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { Properties } from '../models';
import type { VcsRoot } from '../models';
import type { VcsRootInstances } from '../models';
import type { VcsRoots } from '../models';
export declare const VcsRootApiAxiosParamCreator: (configuration?: Configuration) => {
    addVcsRoot: (fields?: string, body?: VcsRoot, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    deleteAllVcsRootProperties: (vcsRootLocator: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    deleteVcsRoot: (vcsRootLocator: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    deleteVcsRootProperty: (vcsRootLocator: string, name: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getAllVcsRootProperties: (vcsRootLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getAllVcsRoots: (locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getRootEndpoints: (vcsRootLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getVcsRootField: (vcsRootLocator: string, field: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getVcsRootInstances: (vcsRootLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getVcsRootProperty: (vcsRootLocator: string, name: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getVcsRootSettingsFile: (vcsRootLocator: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    setVcsRootField: (vcsRootLocator: string, field: string, body?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    setVcsRootProperties: (vcsRootLocator: string, fields?: string, body?: Properties, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    setVcsRootProperty: (vcsRootLocator: string, name: string, body?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const VcsRootApiFp: (configuration?: Configuration) => {
    addVcsRoot(fields?: string, body?: VcsRoot, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VcsRoot>>;
    deleteAllVcsRootProperties(vcsRootLocator: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    deleteVcsRoot(vcsRootLocator: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    deleteVcsRootProperty(vcsRootLocator: string, name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getAllVcsRootProperties(vcsRootLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Properties>>;
    getAllVcsRoots(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VcsRoots>>;
    getRootEndpoints(vcsRootLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VcsRoot>>;
    getVcsRootField(vcsRootLocator: string, field: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    getVcsRootInstances(vcsRootLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VcsRootInstances>>;
    getVcsRootProperty(vcsRootLocator: string, name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    getVcsRootSettingsFile(vcsRootLocator: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    setVcsRootField(vcsRootLocator: string, field: string, body?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    setVcsRootProperties(vcsRootLocator: string, fields?: string, body?: Properties, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Properties>>;
    setVcsRootProperty(vcsRootLocator: string, name: string, body?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
export declare const VcsRootApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    addVcsRoot(fields?: string, body?: VcsRoot, options?: RawAxiosRequestConfig): AxiosPromise<VcsRoot>;
    deleteAllVcsRootProperties(vcsRootLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    deleteVcsRoot(vcsRootLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    deleteVcsRootProperty(vcsRootLocator: string, name: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    getAllVcsRootProperties(vcsRootLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Properties>;
    getAllVcsRoots(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<VcsRoots>;
    getRootEndpoints(vcsRootLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<VcsRoot>;
    getVcsRootField(vcsRootLocator: string, field: string, options?: RawAxiosRequestConfig): AxiosPromise<string>;
    getVcsRootInstances(vcsRootLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<VcsRootInstances>;
    getVcsRootProperty(vcsRootLocator: string, name: string, options?: RawAxiosRequestConfig): AxiosPromise<string>;
    getVcsRootSettingsFile(vcsRootLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<string>;
    setVcsRootField(vcsRootLocator: string, field: string, body?: string, options?: RawAxiosRequestConfig): AxiosPromise<string>;
    setVcsRootProperties(vcsRootLocator: string, fields?: string, body?: Properties, options?: RawAxiosRequestConfig): AxiosPromise<Properties>;
    setVcsRootProperty(vcsRootLocator: string, name: string, body?: string, options?: RawAxiosRequestConfig): AxiosPromise<string>;
};
export interface VcsRootApiInterface {
    addVcsRoot(fields?: string, body?: VcsRoot, options?: RawAxiosRequestConfig): AxiosPromise<VcsRoot>;
    deleteAllVcsRootProperties(vcsRootLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    deleteVcsRoot(vcsRootLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    deleteVcsRootProperty(vcsRootLocator: string, name: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    getAllVcsRootProperties(vcsRootLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Properties>;
    getAllVcsRoots(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<VcsRoots>;
    getRootEndpoints(vcsRootLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<VcsRoot>;
    getVcsRootField(vcsRootLocator: string, field: string, options?: RawAxiosRequestConfig): AxiosPromise<string>;
    getVcsRootInstances(vcsRootLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<VcsRootInstances>;
    getVcsRootProperty(vcsRootLocator: string, name: string, options?: RawAxiosRequestConfig): AxiosPromise<string>;
    getVcsRootSettingsFile(vcsRootLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<string>;
    setVcsRootField(vcsRootLocator: string, field: string, body?: string, options?: RawAxiosRequestConfig): AxiosPromise<string>;
    setVcsRootProperties(vcsRootLocator: string, fields?: string, body?: Properties, options?: RawAxiosRequestConfig): AxiosPromise<Properties>;
    setVcsRootProperty(vcsRootLocator: string, name: string, body?: string, options?: RawAxiosRequestConfig): AxiosPromise<string>;
}
export declare class VcsRootApi extends BaseAPI implements VcsRootApiInterface {
    addVcsRoot(fields?: string, body?: VcsRoot, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<VcsRoot, any, {}>>;
    deleteAllVcsRootProperties(vcsRootLocator: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
    deleteVcsRoot(vcsRootLocator: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
    deleteVcsRootProperty(vcsRootLocator: string, name: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
    getAllVcsRootProperties(vcsRootLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Properties, any, {}>>;
    getAllVcsRoots(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<VcsRoots, any, {}>>;
    getRootEndpoints(vcsRootLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<VcsRoot, any, {}>>;
    getVcsRootField(vcsRootLocator: string, field: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any, {}>>;
    getVcsRootInstances(vcsRootLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<VcsRootInstances, any, {}>>;
    getVcsRootProperty(vcsRootLocator: string, name: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any, {}>>;
    getVcsRootSettingsFile(vcsRootLocator: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any, {}>>;
    setVcsRootField(vcsRootLocator: string, field: string, body?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any, {}>>;
    setVcsRootProperties(vcsRootLocator: string, fields?: string, body?: Properties, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Properties, any, {}>>;
    setVcsRootProperty(vcsRootLocator: string, name: string, body?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any, {}>>;
}
//# sourceMappingURL=vcs-root-api.d.ts.map