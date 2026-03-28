import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { DisabledResponsibilities } from '../models';
import type { EffectiveResponsibilities } from '../models';
import type { EnabledResponsibilities } from '../models';
import type { Node } from '../models';
import type { Nodes } from '../models';
export declare const NodeApiAxiosParamCreator: (configuration?: Configuration) => {
    changeNodeResponsibility: (nodeLocator: string, name: string, body?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getAllNodes: (locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getDisabledResponsibilities: (nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getEffectiveResponsibilities: (nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getEnabledResponsibilities: (nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getNode: (nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const NodeApiFp: (configuration?: Configuration) => {
    changeNodeResponsibility(nodeLocator: string, name: string, body?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EnabledResponsibilities>>;
    getAllNodes(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Nodes>>;
    getDisabledResponsibilities(nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DisabledResponsibilities>>;
    getEffectiveResponsibilities(nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EffectiveResponsibilities>>;
    getEnabledResponsibilities(nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EnabledResponsibilities>>;
    getNode(nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Node>>;
};
export declare const NodeApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    changeNodeResponsibility(nodeLocator: string, name: string, body?: string, options?: RawAxiosRequestConfig): AxiosPromise<EnabledResponsibilities>;
    getAllNodes(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Nodes>;
    getDisabledResponsibilities(nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<DisabledResponsibilities>;
    getEffectiveResponsibilities(nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<EffectiveResponsibilities>;
    getEnabledResponsibilities(nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<EnabledResponsibilities>;
    getNode(nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Node>;
};
export interface NodeApiInterface {
    changeNodeResponsibility(nodeLocator: string, name: string, body?: string, options?: RawAxiosRequestConfig): AxiosPromise<EnabledResponsibilities>;
    getAllNodes(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Nodes>;
    getDisabledResponsibilities(nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<DisabledResponsibilities>;
    getEffectiveResponsibilities(nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<EffectiveResponsibilities>;
    getEnabledResponsibilities(nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<EnabledResponsibilities>;
    getNode(nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Node>;
}
export declare class NodeApi extends BaseAPI implements NodeApiInterface {
    changeNodeResponsibility(nodeLocator: string, name: string, body?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<EnabledResponsibilities, any, {}>>;
    getAllNodes(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Nodes, any, {}>>;
    getDisabledResponsibilities(nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<DisabledResponsibilities, any, {}>>;
    getEffectiveResponsibilities(nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<EffectiveResponsibilities, any, {}>>;
    getEnabledResponsibilities(nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<EnabledResponsibilities, any, {}>>;
    getNode(nodeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Node, any, {}>>;
}
//# sourceMappingURL=node-api.d.ts.map