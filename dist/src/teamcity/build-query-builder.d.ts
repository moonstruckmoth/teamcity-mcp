export type BuildStatus = 'SUCCESS' | 'FAILURE' | 'ERROR' | 'UNKNOWN';
export declare class BuildQueryBuilder {
    private filters;
    private static readonly validStatuses;
    private static readonly specialCharsRegex;
    reset(): BuildQueryBuilder;
    withProject(projectId: string | undefined): BuildQueryBuilder;
    withBuildType(buildTypeId: string | undefined): BuildQueryBuilder;
    withStatus(status: BuildStatus | undefined): BuildQueryBuilder;
    withBranch(branch: string | undefined): BuildQueryBuilder;
    withTag(tag: string | undefined): BuildQueryBuilder;
    withSinceDate(date: string | undefined): BuildQueryBuilder;
    withUntilDate(date: string | undefined): BuildQueryBuilder;
    withSinceBuild(buildId: number | undefined): BuildQueryBuilder;
    withRunning(running: boolean | undefined): BuildQueryBuilder;
    withCanceled(canceled: boolean | undefined): BuildQueryBuilder;
    withPersonal(personal: boolean | undefined): BuildQueryBuilder;
    withFailedToStart(failedToStart: boolean | undefined): BuildQueryBuilder;
    withCount(count: number | undefined): BuildQueryBuilder;
    withStart(start: number | undefined): BuildQueryBuilder;
    build(): string;
    private formatFilter;
    private needsEscaping;
    private convertToTeamCityDate;
    private validate;
}
//# sourceMappingURL=build-query-builder.d.ts.map