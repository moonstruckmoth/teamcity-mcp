import type { HealthCategory } from './health-category';
export interface HealthItem {
    identity?: string;
    severity?: HealthItemSeverityEnum;
    healthCategory?: HealthCategory;
}
export declare const HealthItemSeverityEnum: {
    readonly Info: "INFO";
    readonly Warn: "WARN";
    readonly Error: "ERROR";
};
export type HealthItemSeverityEnum = (typeof HealthItemSeverityEnum)[keyof typeof HealthItemSeverityEnum];
//# sourceMappingURL=health-item.d.ts.map