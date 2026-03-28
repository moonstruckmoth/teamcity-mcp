import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { Test } from '../models';
import type { Tests } from '../models';
export declare const TestApiAxiosParamCreator: (configuration?: Configuration) => {
    getTest: (testLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getTests: (locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const TestApiFp: (configuration?: Configuration) => {
    getTest(testLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Test>>;
    getTests(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Tests>>;
};
export declare const TestApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getTest(testLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Test>;
    getTests(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Tests>;
};
export interface TestApiInterface {
    getTest(testLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Test>;
    getTests(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Tests>;
}
export declare class TestApi extends BaseAPI implements TestApiInterface {
    getTest(testLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Test, any, {}>>;
    getTests(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Tests, any, {}>>;
}
//# sourceMappingURL=test-api.d.ts.map