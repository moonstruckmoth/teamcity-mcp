import type { AxiosInstance, AxiosResponse } from 'axios';
import type { RequestArgs } from './base';
import type { Configuration } from './configuration';
export declare const DUMMY_BASE_URL = "https://example.com";
export declare const assertParamExists: (functionName: string, paramName: string, paramValue: unknown) => void;
export declare const setApiKeyToObject: (object: Record<string, unknown>, keyParamName: string, configuration?: Configuration) => Promise<void>;
export declare const setBasicAuthToObject: (object: Record<string, unknown>, configuration?: Configuration) => void;
export declare const setBearerAuthToObject: (object: Record<string, unknown>, configuration?: Configuration) => Promise<void>;
export declare const setOAuthToObject: (object: Record<string, unknown>, name: string, scopes: string[], configuration?: Configuration) => Promise<void>;
export declare const setSearchParams: (url: URL, ...objects: unknown[]) => void;
export declare const serializeDataIfNeeded: (value: unknown, requestOptions: any, configuration?: Configuration) => {};
export declare const toPathString: (url: URL) => string;
export declare const createRequestFunction: (axiosArgs: RequestArgs, globalAxios: AxiosInstance, BASE_PATH: string, configuration?: Configuration) => <T = unknown, R = AxiosResponse<T>>(axios?: AxiosInstance, basePath?: string) => Promise<R>;
//# sourceMappingURL=common.d.ts.map