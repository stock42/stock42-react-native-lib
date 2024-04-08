interface RequestParams {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'UPDATE';
    data?: object;
    query?: Record<string, string>;
    path?: string;
}
interface RequestResponse {
    data: object;
    status: number;
}
interface PrepareParams {
    version?: string;
    useragent?: string;
    appname?: string;
    applicationKey: string;
}
declare function request(params: RequestParams): Promise<RequestResponse | void>;
export declare function prepare({ version, useragent, appname, applicationKey, }: PrepareParams): Promise<typeof request>;
export {};
