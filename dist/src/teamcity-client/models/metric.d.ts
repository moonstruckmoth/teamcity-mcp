import type { MetricTags } from './metric-tags';
import type { MetricValues } from './metric-values';
export interface Metric {
    name?: string;
    description?: string;
    prometheusName?: string;
    metricValues?: MetricValues;
    metricTags?: MetricTags;
}
//# sourceMappingURL=metric.d.ts.map