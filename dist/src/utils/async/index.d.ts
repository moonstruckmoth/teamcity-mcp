export interface RetryOptions {
    maxAttempts?: number;
    delay?: number;
    backoff?: number;
    maxDelay?: number;
    shouldRetry?: (error: unknown, attempt: number) => boolean;
    onRetry?: (error: unknown, attempt: number) => void;
}
export interface TimeoutOptions {
    timeout: number;
    message?: string;
}
export interface CircuitBreakerOptions {
    failureThreshold?: number;
    resetTimeout?: number;
    onStateChange?: (state: CircuitState, error?: unknown) => void;
}
export type CircuitState = 'CLOSED' | 'OPEN' | 'HALF_OPEN';
export type AsyncResult<T, E = Error> = {
    success: true;
    data: T;
} | {
    success: false;
    error: E;
};
export declare function asyncHandler<TArgs extends unknown[], TReturn>(fn: (...args: TArgs) => Promise<TReturn>): (...args: TArgs) => Promise<TReturn>;
export declare function safeAsyncHandler<TArgs extends unknown[], TReturn>(fn: (...args: TArgs) => Promise<TReturn>): (...args: TArgs) => Promise<AsyncResult<TReturn>>;
export declare function retry<T>(fn: () => Promise<T>, options?: RetryOptions): Promise<T>;
export declare function withTimeout<T>(promise: Promise<T>, options: TimeoutOptions): Promise<T>;
export declare function sleep(ms: number): Promise<void>;
export declare function debounce<TArgs extends unknown[]>(fn: (...args: TArgs) => void, delay: number): (...args: TArgs) => void;
export declare function asyncDebounce<TArgs extends unknown[], TReturn>(fn: (...args: TArgs) => Promise<TReturn>, delay: number): (...args: TArgs) => Promise<TReturn>;
export declare function throttle<TArgs extends unknown[]>(fn: (...args: TArgs) => void, limit: number): (...args: TArgs) => void;
export declare function parallelLimit<T>(items: T[], fn: (item: T, index: number) => Promise<void>, limit: number): Promise<void>;
export declare class CircuitBreaker<TArgs extends unknown[], TReturn> {
    private fn;
    private options;
    private state;
    private failures;
    private lastFailureTime;
    private successCount;
    constructor(fn: (...args: TArgs) => Promise<TReturn>, options?: CircuitBreakerOptions);
    execute(...args: TArgs): Promise<TReturn>;
    getState(): CircuitState;
    getFailures(): number;
    reset(): void;
}
export declare function circuitBreaker<TArgs extends unknown[], TReturn>(fn: (...args: TArgs) => Promise<TReturn>, options?: CircuitBreakerOptions): CircuitBreaker<TArgs, TReturn>;
export declare function batchProcess<T, R>(items: T[], processor: (batch: T[]) => Promise<R[]>, batchSize: number, options?: {
    concurrency?: number;
    onBatchComplete?: (batch: T[], results: R[]) => void;
    onError?: (batch: T[], error: Error) => void;
}): Promise<R[]>;
export declare function measureTime<T>(operation: () => Promise<T>, label?: string): Promise<{
    result: T;
    duration: number;
}>;
export declare const asyncUtils: {
    readonly promisify: <TArgs extends unknown[], TReturn>(fn: (...args: [...TArgs, (err: Error | null, result?: TReturn) => void]) => void) => (...args: TArgs) => Promise<TReturn>;
    readonly raceToSuccess: <T>(promises: Promise<T>[]) => Promise<T>;
    readonly cancellable: <T>(promise: Promise<T>) => {
        promise: Promise<T>;
        cancel: () => void;
    };
};
declare const _default: {
    asyncHandler: typeof asyncHandler;
    safeAsyncHandler: typeof safeAsyncHandler;
    retry: typeof retry;
    withTimeout: typeof withTimeout;
    sleep: typeof sleep;
    debounce: typeof debounce;
    asyncDebounce: typeof asyncDebounce;
    throttle: typeof throttle;
    parallelLimit: typeof parallelLimit;
    circuitBreaker: typeof circuitBreaker;
    batchProcess: typeof batchProcess;
    measureTime: typeof measureTime;
    asyncUtils: {
        readonly promisify: <TArgs extends unknown[], TReturn>(fn: (...args: [...TArgs, (err: Error | null, result?: TReturn) => void]) => void) => (...args: TArgs) => Promise<TReturn>;
        readonly raceToSuccess: <T>(promises: Promise<T>[]) => Promise<T>;
        readonly cancellable: <T>(promise: Promise<T>) => {
            promise: Promise<T>;
            cancel: () => void;
        };
    };
    CircuitBreaker: typeof CircuitBreaker;
};
export default _default;
//# sourceMappingURL=index.d.ts.map