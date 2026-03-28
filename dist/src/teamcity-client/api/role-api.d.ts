import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { Role } from '../models';
import type { Roles } from '../models';
export declare const RoleApiAxiosParamCreator: (configuration?: Configuration) => {
    addIncludedRole: (roleId: string, includedId: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    addPermission: (roleId: string, permissionId: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    createRole: (fields?: string, body?: Role, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    deleteRole: (id: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getRole: (id: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getRoles: (fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    removeIncludedRole: (roleId: string, includedId: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    removePermission: (roleId: string, permissionId: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const RoleApiFp: (configuration?: Configuration) => {
    addIncludedRole(roleId: string, includedId: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Role>>;
    addPermission(roleId: string, permissionId: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Role>>;
    createRole(fields?: string, body?: Role, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Role>>;
    deleteRole(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getRole(id: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Role>>;
    getRoles(fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Roles>>;
    removeIncludedRole(roleId: string, includedId: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Role>>;
    removePermission(roleId: string, permissionId: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Role>>;
};
export declare const RoleApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    addIncludedRole(roleId: string, includedId: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Role>;
    addPermission(roleId: string, permissionId: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Role>;
    createRole(fields?: string, body?: Role, options?: RawAxiosRequestConfig): AxiosPromise<Role>;
    deleteRole(id: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    getRole(id: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Role>;
    getRoles(fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Roles>;
    removeIncludedRole(roleId: string, includedId: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Role>;
    removePermission(roleId: string, permissionId: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Role>;
};
export interface RoleApiInterface {
    addIncludedRole(roleId: string, includedId: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Role>;
    addPermission(roleId: string, permissionId: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Role>;
    createRole(fields?: string, body?: Role, options?: RawAxiosRequestConfig): AxiosPromise<Role>;
    deleteRole(id: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    getRole(id: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Role>;
    getRoles(fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Roles>;
    removeIncludedRole(roleId: string, includedId: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Role>;
    removePermission(roleId: string, permissionId: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<Role>;
}
export declare class RoleApi extends BaseAPI implements RoleApiInterface {
    addIncludedRole(roleId: string, includedId: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Role, any, {}>>;
    addPermission(roleId: string, permissionId: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Role, any, {}>>;
    createRole(fields?: string, body?: Role, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Role, any, {}>>;
    deleteRole(id: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
    getRole(id: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Role, any, {}>>;
    getRoles(fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Roles, any, {}>>;
    removeIncludedRole(roleId: string, includedId: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Role, any, {}>>;
    removePermission(roleId: string, permissionId: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Role, any, {}>>;
}
//# sourceMappingURL=role-api.d.ts.map