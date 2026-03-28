import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { DeploymentDashboard } from '../models';
import type { DeploymentDashboards } from '../models';
import type { DeploymentInstance } from '../models';
import type { DeploymentInstances } from '../models';
import type { DeploymentStateEntry } from '../models';
export declare const DeploymentDashboardApiAxiosParamCreator: (configuration?: Configuration) => {
    createDashboard: (body?: DeploymentDashboard, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    createInstance: (deploymentDashboardLocator: string, body?: DeploymentInstance, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    deleteDashboard: (deploymentDashboardLocator: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    deleteInstance: (deploymentDashboardLocator: string, deploymentInstanceLocator: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getAllDashboards: (locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getDashboard: (deploymentDashboardLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getInstance: (deploymentDashboardLocator: string, deploymentInstanceLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    getInstances: (deploymentDashboardLocator: string, locator?: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    reportNewDeploymentForInstance: (deploymentDashboardLocator: string, deploymentInstanceLocator: string, body?: DeploymentStateEntry, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const DeploymentDashboardApiFp: (configuration?: Configuration) => {
    createDashboard(body?: DeploymentDashboard, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeploymentDashboard>>;
    createInstance(deploymentDashboardLocator: string, body?: DeploymentInstance, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeploymentInstance>>;
    deleteDashboard(deploymentDashboardLocator: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    deleteInstance(deploymentDashboardLocator: string, deploymentInstanceLocator: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    getAllDashboards(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeploymentDashboards>>;
    getDashboard(deploymentDashboardLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeploymentDashboard>>;
    getInstance(deploymentDashboardLocator: string, deploymentInstanceLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeploymentInstance>>;
    getInstances(deploymentDashboardLocator: string, locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeploymentInstances>>;
    reportNewDeploymentForInstance(deploymentDashboardLocator: string, deploymentInstanceLocator: string, body?: DeploymentStateEntry, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeploymentInstance>>;
};
export declare const DeploymentDashboardApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    createDashboard(body?: DeploymentDashboard, options?: RawAxiosRequestConfig): AxiosPromise<DeploymentDashboard>;
    createInstance(deploymentDashboardLocator: string, body?: DeploymentInstance, options?: RawAxiosRequestConfig): AxiosPromise<DeploymentInstance>;
    deleteDashboard(deploymentDashboardLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    deleteInstance(deploymentDashboardLocator: string, deploymentInstanceLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    getAllDashboards(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<DeploymentDashboards>;
    getDashboard(deploymentDashboardLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<DeploymentDashboard>;
    getInstance(deploymentDashboardLocator: string, deploymentInstanceLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<DeploymentInstance>;
    getInstances(deploymentDashboardLocator: string, locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<DeploymentInstances>;
    reportNewDeploymentForInstance(deploymentDashboardLocator: string, deploymentInstanceLocator: string, body?: DeploymentStateEntry, options?: RawAxiosRequestConfig): AxiosPromise<DeploymentInstance>;
};
export interface DeploymentDashboardApiInterface {
    createDashboard(body?: DeploymentDashboard, options?: RawAxiosRequestConfig): AxiosPromise<DeploymentDashboard>;
    createInstance(deploymentDashboardLocator: string, body?: DeploymentInstance, options?: RawAxiosRequestConfig): AxiosPromise<DeploymentInstance>;
    deleteDashboard(deploymentDashboardLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    deleteInstance(deploymentDashboardLocator: string, deploymentInstanceLocator: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    getAllDashboards(locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<DeploymentDashboards>;
    getDashboard(deploymentDashboardLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<DeploymentDashboard>;
    getInstance(deploymentDashboardLocator: string, deploymentInstanceLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<DeploymentInstance>;
    getInstances(deploymentDashboardLocator: string, locator?: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<DeploymentInstances>;
    reportNewDeploymentForInstance(deploymentDashboardLocator: string, deploymentInstanceLocator: string, body?: DeploymentStateEntry, options?: RawAxiosRequestConfig): AxiosPromise<DeploymentInstance>;
}
export declare class DeploymentDashboardApi extends BaseAPI implements DeploymentDashboardApiInterface {
    createDashboard(body?: DeploymentDashboard, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<DeploymentDashboard, any, {}>>;
    createInstance(deploymentDashboardLocator: string, body?: DeploymentInstance, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<DeploymentInstance, any, {}>>;
    deleteDashboard(deploymentDashboardLocator: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
    deleteInstance(deploymentDashboardLocator: string, deploymentInstanceLocator: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any, {}>>;
    getAllDashboards(locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<DeploymentDashboards, any, {}>>;
    getDashboard(deploymentDashboardLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<DeploymentDashboard, any, {}>>;
    getInstance(deploymentDashboardLocator: string, deploymentInstanceLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<DeploymentInstance, any, {}>>;
    getInstances(deploymentDashboardLocator: string, locator?: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<DeploymentInstances, any, {}>>;
    reportNewDeploymentForInstance(deploymentDashboardLocator: string, deploymentInstanceLocator: string, body?: DeploymentStateEntry, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<DeploymentInstance, any, {}>>;
}
//# sourceMappingURL=deployment-dashboard-api.d.ts.map