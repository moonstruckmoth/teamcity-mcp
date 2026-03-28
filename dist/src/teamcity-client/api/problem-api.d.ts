import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { Problem } from '../models';
import type { Problems } from '../models';
export declare const ProblemApiAxiosParamCreator: (configuration?: Configuration) => {
    getAllBuildProblems: (locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getBuildProblem: (problemLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const ProblemApiFp: (configuration?: Configuration) => {
    getAllBuildProblems(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Problems>>;
    getBuildProblem(problemLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Problem>>;
};
export declare const ProblemApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getAllBuildProblems(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Problems>;
    getBuildProblem(problemLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Problem>;
};
export interface ProblemApiInterface {
    getAllBuildProblems(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Problems>;
    getBuildProblem(problemLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Problem>;
}
export declare class ProblemApi extends BaseAPI implements ProblemApiInterface {
    getAllBuildProblems(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Problems, any, {}>>;
    getBuildProblem(problemLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Problem, any, {}>>;
}
//# sourceMappingURL=problem-api.d.ts.map