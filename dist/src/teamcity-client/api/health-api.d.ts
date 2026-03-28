import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { HealthCategories } from '../models';
import type { HealthCategory } from '../models';
import type { HealthItem } from '../models';
import type { HealthStatusItems } from '../models';
export declare const HealthApiAxiosParamCreator: (configuration?: Configuration) => {
    getCategories: (locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getHealthItems: (locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getSingleCategory: (locator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getSingleHealthItem: (locator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const HealthApiFp: (configuration?: Configuration) => {
    getCategories(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthCategories>>;
    getHealthItems(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthStatusItems>>;
    getSingleCategory(locator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthCategory>>;
    getSingleHealthItem(locator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthItem>>;
};
export declare const HealthApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getCategories(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<HealthCategories>;
    getHealthItems(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<HealthStatusItems>;
    getSingleCategory(locator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<HealthCategory>;
    getSingleHealthItem(locator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<HealthItem>;
};
export interface HealthApiInterface {
    getCategories(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<HealthCategories>;
    getHealthItems(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<HealthStatusItems>;
    getSingleCategory(locator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<HealthCategory>;
    getSingleHealthItem(locator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<HealthItem>;
}
export declare class HealthApi extends BaseAPI implements HealthApiInterface {
    getCategories(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<HealthCategories, any, {}>>;
    getHealthItems(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<HealthStatusItems, any, {}>>;
    getSingleCategory(locator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<HealthCategory, any, {}>>;
    getSingleHealthItem(locator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<HealthItem, any, {}>>;
}
//# sourceMappingURL=health-api.d.ts.map