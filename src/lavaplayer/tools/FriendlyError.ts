export class FriendlyError extends Error {
    public constructor(friendlyMessage: string, public severity: Severity) {
        super(friendlyMessage);
    }
}

export enum Severity {
    COMMON,
    SUSPICIOUS,
    FAULT
}
