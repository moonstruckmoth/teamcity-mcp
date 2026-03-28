import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { TestOccurrence } from '../models';
import type { TestOccurrences } from '../models';
export declare const TestOccurrenceApiAxiosParamCreator: (configuration?: Configuration) => {
    getAllTestOccurrences: (locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getTestOccurrence: (testLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const TestOccurrenceApiFp: (configuration?: Configuration) => {
    getAllTestOccurrences(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TestOccurrences>>;
    getTestOccurrence(testLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TestOccurrence>>;
};
export declare const TestOccurrenceApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getAllTestOccurrences(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<TestOccurrences>;
    getTestOccurrence(testLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<TestOccurrence>;
};
export interface TestOccurrenceApiInterface {
    getAllTestOccurrences(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<TestOccurrences>;
    getTestOccurrence(testLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<TestOccurrence>;
}
export declare class TestOccurrenceApi extends BaseAPI implements TestOccurrenceApiInterface {
    getAllTestOccurrences(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<TestOccurrences, any, {}>>;
    getTestOccurrence(testLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<TestOccurrence, any, {}>>;
}
//# sourceMappingURL=test-occurrence-api.d.ts.map