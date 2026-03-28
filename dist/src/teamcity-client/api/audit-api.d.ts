import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { AuditEvent } from '../models';
import type { AuditEvents } from '../models';
export declare const AuditApiAxiosParamCreator: (configuration?: Configuration) => {
    getAllAuditEvents: (locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getAuditEvent: (auditEventLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const AuditApiFp: (configuration?: Configuration) => {
    getAllAuditEvents(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuditEvents>>;
    getAuditEvent(auditEventLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuditEvent>>;
};
export declare const AuditApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getAllAuditEvents(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<AuditEvents>;
    getAuditEvent(auditEventLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<AuditEvent>;
};
export interface AuditApiInterface {
    getAllAuditEvents(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<AuditEvents>;
    getAuditEvent(auditEventLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<AuditEvent>;
}
export declare class AuditApi extends BaseAPI implements AuditApiInterface {
    getAllAuditEvents(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<AuditEvents, any, {}>>;
    getAuditEvent(auditEventLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<AuditEvent, any, {}>>;
}
//# sourceMappingURL=audit-api.d.ts.map