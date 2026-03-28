import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { CloudImage } from '../models';
import type { CloudImages } from '../models';
import type { CloudInstance } from '../models';
import type { CloudInstances } from '../models';
import type { CloudProfile } from '../models';
import type { CloudProfiles } from '../models';
export declare const CloudInstanceApiAxiosParamCreator: (configuration?: Configuration) => {
    forseTerminateInstance: (instanceLocator: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getAllCloudImages: (locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getAllCloudInstances: (locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getAllCloudProfiles: (locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getCloudImage: (imageLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getCloudInstance: (instanceLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getCloudProfile: (profileLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    startInstance: (fields?: string, body?: CloudInstance, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    stopInstance: (instanceLocator: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    terminateInstance: (instanceLocator: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const CloudInstanceApiFp: (configuration?: Configuration) => {
    forseTerminateInstance(instanceLocator: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getAllCloudImages(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CloudImages>>;
    getAllCloudInstances(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CloudInstances>>;
    getAllCloudProfiles(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CloudProfiles>>;
    getCloudImage(imageLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CloudImage>>;
    getCloudInstance(instanceLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CloudInstance>>;
    getCloudProfile(profileLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CloudProfile>>;
    startInstance(fields?: string, body?: CloudInstance, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    stopInstance(instanceLocator: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    terminateInstance(instanceLocator: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const CloudInstanceApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    forseTerminateInstance(instanceLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    getAllCloudImages(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<CloudImages>;
    getAllCloudInstances(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<CloudInstances>;
    getAllCloudProfiles(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<CloudProfiles>;
    getCloudImage(imageLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<CloudImage>;
    getCloudInstance(instanceLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<CloudInstance>;
    getCloudProfile(profileLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<CloudProfile>;
    startInstance(fields?: string, body?: CloudInstance, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    stopInstance(instanceLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    terminateInstance(instanceLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
};
export interface CloudInstanceApiInterface {
    forseTerminateInstance(instanceLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    getAllCloudImages(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<CloudImages>;
    getAllCloudInstances(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<CloudInstances>;
    getAllCloudProfiles(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<CloudProfiles>;
    getCloudImage(imageLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<CloudImage>;
    getCloudInstance(instanceLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<CloudInstance>;
    getCloudProfile(profileLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<CloudProfile>;
    startInstance(fields?: string, body?: CloudInstance, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    stopInstance(instanceLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    terminateInstance(instanceLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
}
export declare class CloudInstanceApi extends BaseAPI implements CloudInstanceApiInterface {
    forseTerminateInstance(instanceLocator: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
    getAllCloudImages(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<CloudImages, any, {}>>;
    getAllCloudInstances(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<CloudInstances, any, {}>>;
    getAllCloudProfiles(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<CloudProfiles, any, {}>>;
    getCloudImage(imageLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<CloudImage, any, {}>>;
    getCloudInstance(instanceLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<CloudInstance, any, {}>>;
    getCloudProfile(profileLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<CloudProfile, any, {}>>;
    startInstance(fields?: string, body?: CloudInstance, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
    stopInstance(instanceLocator: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
    terminateInstance(instanceLocator: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
}
//# sourceMappingURL=cloud-instance-api.d.ts.map