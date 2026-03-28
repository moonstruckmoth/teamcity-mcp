export declare enum CircuitState {
    CLOSED = "CLOSED",
    OPEN = "OPEN",
    HALF_OPEN = "HALF_OPEN"
}
export interface CircuitBreakerOptions {
    failureThreshold?: number;
    resetTimeout?: number;
    monitoringPeriod?: number;
    successThreshold?: number;
}
export declare class CircuitBreaker {
    private state;
    private failureCount;
    private successCount;
    private lastFailureTime?;
    private readonly failureThreshold;
    private readonly resetTimeout;
    private readonly monitoringPeriod;
    private readonly successThreshold;
    private readonly name;
    constructor(name: string, options?: CircuitBreakerOptions);
    execute<T>(fn: () => Promise<T>): Promise<T>;
    private onSuccess;
    private onFailure;
    private shouldAttemptReset;
    private transitionTo;
    getState(): CircuitState;
    getStats(): {
        state: CircuitState;
        failureCount: number;
        successCount: number;
        lastFailureTime?: number;
    };
    reset(): void;
}
export declare class CircuitBreakerManager {
    private readonly breakers;
    private readonly defaultOptions;
    constructor(defaultOptions?: CircuitBreakerOptions);
    getBreaker(endpoint: string): CircuitBreaker;
    execute<T>(endpoint: string, fn: () => Promise<T>): Promise<T>;
    getAllStats(): Record<string, ReturnType<CircuitBreaker['getStats']>>;
    resetAll(): void;
    reset(endpoint: string): void;
}
//# sourceMappingURL=circuit-breaker.d.ts.map