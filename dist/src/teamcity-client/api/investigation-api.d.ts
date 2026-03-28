import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { Investigation } from '../models';
import type { Investigations } from '../models';
export declare const InvestigationApiAxiosParamCreator: (configuration?: Configuration) => {
    addInvestigation: (fields?: string, body?: Investigation, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    addMultipleInvestigations: (fields?: string, body?: Investigations, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    deleteInvestigation: (investigationLocator: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getAllInvestigations: (locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getInvestigation: (investigationLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    replaceInvestigation: (investigationLocator: string, fields?: string, body?: Investigation, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const InvestigationApiFp: (configuration?: Configuration) => {
    addInvestigation(fields?: string, body?: Investigation, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Investigation>>;
    addMultipleInvestigations(fields?: string, body?: Investigations, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Investigations>>;
    deleteInvestigation(investigationLocator: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getAllInvestigations(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Investigations>>;
    getInvestigation(investigationLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Investigation>>;
    replaceInvestigation(investigationLocator: string, fields?: string, body?: Investigation, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Investigation>>;
};
export declare const InvestigationApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    addInvestigation(fields?: string, body?: Investigation, options?: RawAxiosRequestConfig): AxiosPromise<Investigation>;
    addMultipleInvestigations(fields?: string, body?: Investigations, options?: RawAxiosRequestConfig): AxiosPromise<Investigations>;
    deleteInvestigation(investigationLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    getAllInvestigations(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Investigations>;
    getInvestigation(investigationLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Investigation>;
    replaceInvestigation(investigationLocator: string, fields?: string, body?: Investigation, options?: RawAxiosRequestConfig): AxiosPromise<Investigation>;
};
export interface InvestigationApiInterface {
    addInvestigation(fields?: string, body?: Investigation, options?: RawAxiosRequestConfig): AxiosPromise<Investigation>;
    addMultipleInvestigations(fields?: string, body?: Investigations, options?: RawAxiosRequestConfig): AxiosPromise<Investigations>;
    deleteInvestigation(investigationLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    getAllInvestigations(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Investigations>;
    getInvestigation(investigationLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Investigation>;
    replaceInvestigation(investigationLocator: string, fields?: string, body?: Investigation, options?: RawAxiosRequestConfig): AxiosPromise<Investigation>;
}
export declare class InvestigationApi extends BaseAPI implements InvestigationApiInterface {
    addInvestigation(fields?: string, body?: Investigation, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Investigation, any, {}>>;
    addMultipleInvestigations(fields?: string, body?: Investigations, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Investigations, any, {}>>;
    deleteInvestigation(investigationLocator: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
    getAllInvestigations(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Investigations, any, {}>>;
    getInvestigation(investigationLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Investigation, any, {}>>;
    replaceInvestigation(investigationLocator: string, fields?: string, body?: Investigation, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Investigation, any, {}>>;
}
//# sourceMappingURL=investigation-api.d.ts.map