import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { Mute } from '../models';
import type { Mutes } from '../models';
export declare const MuteApiAxiosParamCreator: (configuration?: Configuration) => {
    getAllMutedTests: (locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getMutedTest: (muteLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    muteMultipleTests: (fields?: string, body?: Mutes, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    muteTest: (fields?: string, body?: Mute, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    unmuteMultipleTests: (fields?: string, body?: Mutes, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    unmuteTest: (muteLocator: string, body?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const MuteApiFp: (configuration?: Configuration) => {
    getAllMutedTests(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Mutes>>;
    getMutedTest(muteLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Mute>>;
    muteMultipleTests(fields?: string, body?: Mutes, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Mutes>>;
    muteTest(fields?: string, body?: Mute, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Mute>>;
    unmuteMultipleTests(fields?: string, body?: Mutes, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    unmuteTest(muteLocator: string, body?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const MuteApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getAllMutedTests(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Mutes>;
    getMutedTest(muteLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Mute>;
    muteMultipleTests(fields?: string, body?: Mutes, options?: RawAxiosRequestConfig): AxiosPromise<Mutes>;
    muteTest(fields?: string, body?: Mute, options?: RawAxiosRequestConfig): AxiosPromise<Mute>;
    unmuteMultipleTests(fields?: string, body?: Mutes, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    unmuteTest(muteLocator: string, body?: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
};
export interface MuteApiInterface {
    getAllMutedTests(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Mutes>;
    getMutedTest(muteLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Mute>;
    muteMultipleTests(fields?: string, body?: Mutes, options?: RawAxiosRequestConfig): AxiosPromise<Mutes>;
    muteTest(fields?: string, body?: Mute, options?: RawAxiosRequestConfig): AxiosPromise<Mute>;
    unmuteMultipleTests(fields?: string, body?: Mutes, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    unmuteTest(muteLocator: string, body?: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
}
export declare class MuteApi extends BaseAPI implements MuteApiInterface {
    getAllMutedTests(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Mutes, any, {}>>;
    getMutedTest(muteLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Mute, any, {}>>;
    muteMultipleTests(fields?: string, body?: Mutes, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Mutes, any, {}>>;
    muteTest(fields?: string, body?: Mute, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Mute, any, {}>>;
    unmuteMultipleTests(fields?: string, body?: Mutes, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
    unmuteTest(muteLocator: string, body?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
}
//# sourceMappingURL=mute-api.d.ts.map