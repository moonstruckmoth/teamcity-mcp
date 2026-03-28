import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { Builds } from '../models';
import type { Change } from '../models';
import type { Changes } from '../models';
import type { Entries } from '../models';
import type { Issues } from '../models';
import type { Items } from '../models';
import type { VcsRootInstance } from '../models';
export declare const ChangeApiAxiosParamCreator: (configuration?: Configuration) => {
    getAllChanges: (locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getChange: (changeLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getChangeAttributes: (changeLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getChangeDuplicates: (changeLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getChangeField: (changeLocator: string, field: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getChangeFirstBuilds: (changeLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getChangeIssue: (changeLocator: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getChangeParentChanges: (changeLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getChangeParentRevisions: (changeLocator: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getChangeVcsRoot: (changeLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const ChangeApiFp: (configuration?: Configuration) => {
    getAllChanges(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Changes>>;
    getChange(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Change>>;
    getChangeAttributes(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Entries>>;
    getChangeDuplicates(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Changes>>;
    getChangeField(changeLocator: string, field: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    getChangeFirstBuilds(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Builds>>;
    getChangeIssue(changeLocator: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Issues>>;
    getChangeParentChanges(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Changes>>;
    getChangeParentRevisions(changeLocator: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Items>>;
    getChangeVcsRoot(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VcsRootInstance>>;
};
export declare const ChangeApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getAllChanges(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Changes>;
    getChange(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Change>;
    getChangeAttributes(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Entries>;
    getChangeDuplicates(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Changes>;
    getChangeField(changeLocator: string, field: string, options?: RawAxiosRequestConfig): AxiosPromise<string>;
    getChangeFirstBuilds(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Builds>;
    getChangeIssue(changeLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<Issues>;
    getChangeParentChanges(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Changes>;
    getChangeParentRevisions(changeLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<Items>;
    getChangeVcsRoot(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<VcsRootInstance>;
};
export interface ChangeApiInterface {
    getAllChanges(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Changes>;
    getChange(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Change>;
    getChangeAttributes(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Entries>;
    getChangeDuplicates(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Changes>;
    getChangeField(changeLocator: string, field: string, options?: RawAxiosRequestConfig): AxiosPromise<string>;
    getChangeFirstBuilds(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Builds>;
    getChangeIssue(changeLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<Issues>;
    getChangeParentChanges(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Changes>;
    getChangeParentRevisions(changeLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<Items>;
    getChangeVcsRoot(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<VcsRootInstance>;
}
export declare class ChangeApi extends BaseAPI implements ChangeApiInterface {
    getAllChanges(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Changes, any, {}>>;
    getChange(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Change, any, {}>>;
    getChangeAttributes(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Entries, any, {}>>;
    getChangeDuplicates(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Changes, any, {}>>;
    getChangeField(changeLocator: string, field: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any, {}>>;
    getChangeFirstBuilds(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Builds, any, {}>>;
    getChangeIssue(changeLocator: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Issues, any, {}>>;
    getChangeParentChanges(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Changes, any, {}>>;
    getChangeParentRevisions(changeLocator: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Items, any, {}>>;
    getChangeVcsRoot(changeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<VcsRootInstance, any, {}>>;
}
//# sourceMappingURL=change-api.d.ts.map