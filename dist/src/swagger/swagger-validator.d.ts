export interface ValidationResult {
    isValid: boolean;
    errors?: string[];
    warnings?: string[];
    version?: string;
    teamCityVersion?: string;
    hasRequiredPaths?: boolean;
}
export declare class SwaggerValidator {
    private requiredPaths;
    validateSpec(spec: unknown): ValidationResult;
    private isValidSpec;
    private extractTeamCityVersion;
    private checkRequiredPaths;
    isVersionSupported(version: string): boolean;
}
//# sourceMappingURL=swagger-validator.d.ts.map