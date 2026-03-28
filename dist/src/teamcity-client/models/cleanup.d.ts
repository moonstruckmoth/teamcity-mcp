import type { Cron } from './cron';
import type { Daily } from './daily';
export interface Cleanup {
    enabled?: boolean;
    maxCleanupDuration?: number;
    daily?: Daily;
    cron?: Cron;
}
//# sourceMappingURL=cleanup.d.ts.map