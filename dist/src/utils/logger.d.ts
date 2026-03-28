import type { Logger } from 'winston';
import { TeamCityLogger } from './logger/index';
export type { TeamCityLogger };
export declare function createLogger(name?: string): Logger;
export declare function getLogger(): Logger;
export declare function info(message: string, meta?: Record<string, unknown>): void;
export declare function error(message: string, err?: Error | unknown, meta?: Record<string, unknown>): void;
export declare function warn(message: string, meta?: Record<string, unknown>): void;
export declare function debug(message: string, meta?: Record<string, unknown>): void;
export declare function child(meta: Record<string, unknown>): Logger;
//# sourceMappingURL=logger.d.ts.map