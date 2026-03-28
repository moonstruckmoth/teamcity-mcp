export interface BranchSpec {
    pattern: string;
    type: 'include' | 'exclude';
    isDefault: boolean;
    regex?: RegExp;
}
export interface MatchResult {
    configId: string;
    configName: string;
    matchedSpec: string;
    confidence: number;
}
export interface BuildConfiguration {
    id: string;
    name: string;
    branchSpecs: string[];
}
export declare class BranchSpecificationParser {
    parseSpecification(spec: string): BranchSpec;
    parseMultipleSpecifications(specs: string[] | string): BranchSpec[];
    convertWildcardToRegex(pattern: string): RegExp;
    extractDefaultBranch(specs: BranchSpec[]): string | null;
    matchBranch(branchName: string, specs: BranchSpec[]): boolean;
}
export declare class BranchMatcher {
    private parser;
    constructor(parser: BranchSpecificationParser);
    matchBranch(branchName: string, specs: BranchSpec[]): boolean;
    getMatchingConfigurations(branchName: string, configurations: BuildConfiguration[]): MatchResult[];
    private calculateConfidence;
    getBranchesForConfiguration(specs: string[]): string[];
}
//# sourceMappingURL=branch-specification-parser.d.ts.map