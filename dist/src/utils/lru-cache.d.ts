export interface LRUCacheOptions {
    maxSize?: number;
    ttl?: number;
}
export declare class LRUCache<T> {
    private cache;
    private maxSize;
    private ttl;
    constructor(options?: LRUCacheOptions);
    get(key: string): T | null;
    set(key: string, value: T): void;
    has(key: string): boolean;
    delete(key: string): boolean;
    clear(): void;
    size(): number;
    keys(): IterableIterator<string>;
    private isExpired;
    evictExpired(): void;
}
//# sourceMappingURL=lru-cache.d.ts.map