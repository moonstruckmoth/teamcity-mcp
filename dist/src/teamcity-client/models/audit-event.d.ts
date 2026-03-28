import type { AuditAction } from './audit-action';
import type { RelatedEntities } from './related-entities';
import type { User } from './user';
export interface AuditEvent {
    id?: string;
    timestamp?: string;
    comment?: string;
    action?: AuditAction;
    relatedEntities?: RelatedEntities;
    user?: User;
}
//# sourceMappingURL=audit-event.d.ts.map