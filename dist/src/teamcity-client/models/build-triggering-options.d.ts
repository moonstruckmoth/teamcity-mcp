import type { BuildTypes } from './build-types';
export interface BuildTriggeringOptions {
    cleanSources?: boolean;
    cleanSourcesInAllDependencies?: boolean;
    rebuildAllDependencies?: boolean;
    rebuildFailedOrIncompleteDependencies?: boolean;
    queueAtTop?: boolean;
    freezeSettings?: boolean;
    tagDependencies?: boolean;
    rebuildDependencies?: BuildTypes;
}
//# sourceMappingURL=build-triggering-options.d.ts.map