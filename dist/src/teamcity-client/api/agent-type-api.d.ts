import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import { BaseAPI, type RequestArgs } from '../base';
import type { Configuration } from '../configuration';
import type { AgentType } from '../models';
export declare const AgentTypeApiAxiosParamCreator: (configuration?: Configuration) => {
    getAgentType: (agentTypeLocator: string, fields?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
export declare const AgentTypeApiFp: (configuration?: Configuration) => {
    getAgentType(agentTypeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AgentType>>;
};
export declare const AgentTypeApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    getAgentType(agentTypeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<AgentType>;
};
export interface AgentTypeApiInterface {
    getAgentType(agentTypeLocator: string, fields?: string, options?: RawAxiosRequestConfig): AxiosPromise<AgentType>;
}
export declare class AgentTypeApi extends BaseAPI implements AgentTypeApiInterface {
    getAgentType(agentTypeLocator: string, fields?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<AgentType, any, {}>>;
}
//# sourceMappingURL=agent-type-api.d.ts.map