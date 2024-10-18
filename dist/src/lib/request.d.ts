import { type PrepareParams, type RequestParams, type RequestResponse } from '../types/types.d.js';
export declare class Request {
    private readonly PATH;
    private readonly HOST;
    private static instance;
    readonly appVersion: string;
    readonly userAgent: string;
    readonly appName: string;
    private sid;
    readonly deviceId: string;
    readonly applicationToken: string;
    private generateRequestUUID;
    fetch(params: RequestParams): Promise<RequestResponse>;
    constructor(options: PrepareParams);
    getInstance(options: PrepareParams): Request;
    init(): Promise<Request>;
    getSID(): string;
}
