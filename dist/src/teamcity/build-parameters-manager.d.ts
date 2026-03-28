import type { Logger } from 'winston';
import type { ResolvedBuildConfiguration } from './build-configuration-resolver';
import type { TeamCityUnifiedClient } from './types/client';
export declare enum ParameterType {
    ENVIRONMENT = "env",
    SYSTEM = "system",
    CONFIGURATION = "config",
    BUILD = "build"
}
export interface ParameterDefinition {
    name: string;
    value: string;
    type: ParameterType;
    description?: string;
    required?: boolean;
    hidden?: boolean;
}
export interface ParameterValue {
    name: string;
    value: string;
    type: ParameterType;
    source?: 'user' | 'template' | 'config' | 'default';
    overridden?: boolean;
}
export interface BranchResolutionOptions {
    branchName?: string;
    vcsRootId?: string;
    tagName?: string;
    pullRequestNumber?: string;
    useDefault?: boolean;
    validateExists?: boolean;
    preferMergeRef?: boolean;
}
export interface PersonalBuildOptions {
    isPersonal: boolean;
    userId?: string;
    description?: string;
    patches?: Array<{
        file: string;
        content: string;
    }>;
}
export interface ValidationOptions {
    requiredParameters?: string[];
    parameterSchemas?: Record<string, ParameterSchema>;
    throwOnMissing?: boolean;
    throwOnInvalid?: boolean;
}
export interface ParameterSchema {
    type: 'string' | 'number' | 'boolean';
    enum?: string[];
    pattern?: string;
    min?: number;
    max?: number;
}
export interface ValidationResult {
    valid: boolean;
    errors: string[];
    warnings: string[];
    missingRequired: string[];
}
export interface ParameterConflict {
    parameter: string;
    values: string[];
    sources: string[];
}
export interface DependencyValidation {
    satisfied: string[];
    missing: string[];
    disabled: string[];
}
export declare class ParameterValidationError extends Error {
    readonly parameter?: string | undefined;
    constructor(message: string, parameter?: string | undefined);
}
export declare class RequiredParameterError extends Error {
    readonly missingParameters: string[];
    constructor(message: string, missingParameters: string[]);
}
export declare class ParameterConflictError extends Error {
    readonly conflicts: ParameterConflict[];
    constructor(message: string, conflicts: ParameterConflict[]);
}
export declare class ParameterSet {
    private _parameters;
    metadata?: Record<string, unknown>;
    constructor(parameters?: ParameterValue[]);
    get length(): number;
    get parameters(): ParameterValue[];
    getParameter(name: string): ParameterValue | undefined;
    setParameter(param: ParameterValue): void;
    hasParameter(name: string): boolean;
    removeParameter(name: string): boolean;
    merge(other: ParameterSet, overwrite?: boolean): void;
    toArray(): ParameterValue[];
    toObject(): Record<string, string>;
}
export declare class BuildParametersManager {
    private client;
    private logger;
    constructor(config: {
        client: TeamCityUnifiedClient;
        logger: Logger;
    });
    parseParameters(input: Record<string, string>): ParameterValue[];
    parseFromCLI(args: string[]): ParameterValue[];
    validateParameters(parameters: ParameterValue[], _buildConfig: ResolvedBuildConfiguration, options?: ValidationOptions): ValidationResult;
    validateRequiredParameters(parameters: ParameterValue[], required: string[], options?: {
        throwOnMissing?: boolean;
    }): string[];
    mergeParameters(userParameters: ParameterValue[], buildConfig: ResolvedBuildConfiguration): ParameterSet;
    mergeParametersWithPrecedence(userParams: ParameterValue[], templateParams: ParameterValue[], buildConfig: ResolvedBuildConfiguration): ParameterSet;
    detectConflicts(params1: ParameterValue[], params2: ParameterValue[]): ParameterConflict[];
    resolveConflicts(params1: ParameterValue[], params2: ParameterValue[], options?: {
        throwOnConflict?: boolean;
    }): ParameterValue[];
    resolveReferences(parameters: ParameterValue[]): ParameterSet;
    resolveBranch(options: BranchResolutionOptions): string;
    private resolveBranchFromList;
    configurePersonalBuild(parameters: ParameterValue[], buildConfig: ResolvedBuildConfiguration, options: PersonalBuildOptions): ParameterSet;
    validateDependencies(parameters: ParameterValue[], dependencies: Record<string, {
        requires: string;
        value: string;
        default?: string;
    }>): DependencyValidation;
    addDependentParameters(parameters: ParameterValue[], dependencies: Record<string, {
        requires: string;
        value: string;
        default?: string;
    }>): ParameterSet;
    serializeForAPI(paramSet: ParameterSet): {
        property: Array<{
            name: string;
            value: string;
        }>;
    };
    serializeToCLI(paramSet: ParameterSet): string[];
    exportToEnvironment(paramSet: ParameterSet): Record<string, string>;
    private detectParameterType;
    private isValidParameterName;
    private validateParameterValue;
}
//# sourceMappingURL=build-parameters-manager.d.ts.map