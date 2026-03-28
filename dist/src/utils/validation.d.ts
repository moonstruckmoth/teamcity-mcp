import { z } from 'zod';
import { MCPValidationError } from '../middleware/error';
export declare const CommonSchemas: {
    teamCityUrl: z.ZodString;
    buildConfigId: z.ZodString;
    branchName: z.ZodString;
    buildParameters: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNull]>>;
    pagination: z.ZodObject<{
        limit: z.ZodDefault<z.ZodNumber>;
        offset: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>;
    dateRange: z.ZodObject<{
        from: z.ZodOptional<z.ZodString>;
        to: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
};
export interface ValidationResult<T> {
    success: boolean;
    data?: T;
    error?: MCPValidationError;
}
export declare function validateWithSchema<T>(data: unknown, schema: z.ZodSchema<T>, context?: {
    operation?: string;
    field?: string;
}): ValidationResult<T>;
export declare function validateAndTransform<T>(data: unknown, schema: z.ZodSchema<T>, context?: {
    operation?: string;
    field?: string;
}): T;
export declare function createValidationMiddleware<T>(schema: z.ZodSchema<T>): (data: unknown, toolName: string) => T;
export declare const validateTeamCityUrl: (url: string) => boolean;
export declare const validateBuildConfigId: (id: string) => boolean;
export declare const validateBranchName: (branch: string) => boolean;
export declare const validateBuildParameters: (params: Record<string, unknown>) => {
    valid: boolean;
    errors: string[];
};
export declare const sanitizeString: (input: string, maxLength?: number) => string;
export declare const createSanitizedStringSchema: (maxLength?: number) => z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
export declare const optional: <T>(schema: z.ZodSchema<T>) => z.ZodOptional<z.ZodType<T, unknown, z.core.$ZodTypeInternals<T, unknown>>>;
export declare const nullable: <T>(schema: z.ZodSchema<T>) => z.ZodNullable<z.ZodType<T, unknown, z.core.$ZodTypeInternals<T, unknown>>>;
export declare const createEnumSchema: <T extends string>(values: readonly T[]) => z.ZodEnum<{ [k_1 in T]: k_1; } extends infer T_1 ? { [k in keyof T_1]: T_1[k]; } : never>;
//# sourceMappingURL=validation.d.ts.map