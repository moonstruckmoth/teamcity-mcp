import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
export declare function generateRequestId(): string;
export declare function addRequestId(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig;
export interface TeamCityAPIErrorData {
    code: string;
    message: string;
    details?: string;
    requestId?: string;
    statusCode?: number;
    originalError?: Error;
}
export declare function extractErrorDetails(error: AxiosError): TeamCityAPIErrorData;
export declare function logResponse(response: AxiosResponse): AxiosResponse;
export declare function logAndTransformError(error: AxiosError): Promise<never>;
export declare function validateToken(token: string): boolean;
export declare function validateServerUrl(url: string): boolean;
export interface ValidationResult {
    isValid: boolean;
    errors: string[];
}
export declare function validateConfiguration(baseUrl: string, token: string): ValidationResult;
//# sourceMappingURL=auth.d.ts.map