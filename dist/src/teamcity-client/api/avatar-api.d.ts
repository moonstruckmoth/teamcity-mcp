import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
export declare const AvatarApiAxiosParamCreator: (configuration?: Configuration) => {
    deleteAvatar: (userLocator: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getAvatar: (userLocator: string, size: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getAvatarWithHash: (userLocator: string, size: number, hash: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    putAvatar: (userLocator: string, avatar?: File, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const AvatarApiFp: (configuration?: Configuration) => {
    deleteAvatar(userLocator: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getAvatar(userLocator: string, size: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getAvatarWithHash(userLocator: string, size: number, hash: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    putAvatar(userLocator: string, avatar?: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
export declare const AvatarApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    deleteAvatar(userLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    getAvatar(userLocator: string, size: number, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    getAvatarWithHash(userLocator: string, size: number, hash: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    putAvatar(userLocator: string, avatar?: File, options?: RawAxiosRequestConfig): AxiosPromise<void>;
};
export interface AvatarApiInterface {
    deleteAvatar(userLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    getAvatar(userLocator: string, size: number, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    getAvatarWithHash(userLocator: string, size: number, hash: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    putAvatar(userLocator: string, avatar?: File, options?: RawAxiosRequestConfig): AxiosPromise<void>;
}
export declare class AvatarApi extends BaseAPI implements AvatarApiInterface {
    deleteAvatar(userLocator: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
    getAvatar(userLocator: string, size: number, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
    getAvatarWithHash(userLocator: string, size: number, hash: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
    putAvatar(userLocator: string, avatar?: File, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
}
//# sourceMappingURL=avatar-api.d.ts.map