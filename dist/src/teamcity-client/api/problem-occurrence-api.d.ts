import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { ProblemOccurrence } from '../models';
import type { ProblemOccurrences } from '../models';
export declare const ProblemOccurrenceApiAxiosParamCreator: (configuration?: Configuration) => {
    getAllBuildProblemOccurrences: (locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getBuildProblemOccurrence: (problemLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const ProblemOccurrenceApiFp: (configuration?: Configuration) => {
    getAllBuildProblemOccurrences(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProblemOccurrences>>;
    getBuildProblemOccurrence(problemLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProblemOccurrence>>;
};
export declare const ProblemOccurrenceApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getAllBuildProblemOccurrences(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<ProblemOccurrences>;
    getBuildProblemOccurrence(problemLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<ProblemOccurrence>;
};
export interface ProblemOccurrenceApiInterface {
    getAllBuildProblemOccurrences(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<ProblemOccurrences>;
    getBuildProblemOccurrence(problemLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<ProblemOccurrence>;
}
export declare class ProblemOccurrenceApi extends BaseAPI implements ProblemOccurrenceApiInterface {
    getAllBuildProblemOccurrences(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ProblemOccurrences, any, {}>>;
    getBuildProblemOccurrence(problemLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ProblemOccurrence, any, {}>>;
}
//# sourceMappingURL=problem-occurrence-api.d.ts.map