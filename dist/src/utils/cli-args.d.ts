export interface CliArgs {
    url?: string;
    token?: string;
    mode?: 'dev' | 'full';
    config?: string;
    help: boolean;
    version: boolean;
}
export declare function parseCliArgs(argv: string[]): CliArgs;
export declare function getVersion(): string;
export declare function getHelpText(): string;
//# sourceMappingURL=cli-args.d.ts.map