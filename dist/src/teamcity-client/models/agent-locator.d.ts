export interface AgentLocator {
    $singleValue?: string;
    authorized?: AgentLocatorAuthorizedEnum;
    build?: string;
    compatible?: string;
    connected?: AgentLocatorConnectedEnum;
    count?: number;
    enabled?: AgentLocatorEnabledEnum;
    id?: number;
    ip?: string;
    name?: string;
    parameter?: string;
    pool?: string;
    start?: number;
}
export declare const AgentLocatorAuthorizedEnum: {
    readonly True: "true";
    readonly False: "false";
    readonly Any: "any";
};
export type AgentLocatorAuthorizedEnum = (typeof AgentLocatorAuthorizedEnum)[keyof typeof AgentLocatorAuthorizedEnum];
export declare const AgentLocatorConnectedEnum: {
    readonly True: "true";
    readonly False: "false";
    readonly Any: "any";
};
export type AgentLocatorConnectedEnum = (typeof AgentLocatorConnectedEnum)[keyof typeof AgentLocatorConnectedEnum];
export declare const AgentLocatorEnabledEnum: {
    readonly True: "true";
    readonly False: "false";
    readonly Any: "any";
};
export type AgentLocatorEnabledEnum = (typeof AgentLocatorEnabledEnum)[keyof typeof AgentLocatorEnabledEnum];
//# sourceMappingURL=agent-locator.d.ts.map