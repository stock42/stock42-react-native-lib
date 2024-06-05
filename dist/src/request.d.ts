import { PrepareParams, RequestParams, RequestResponse } from './types.d';
export declare function request(params: RequestParams): Promise<RequestResponse | void>;
export declare function init(options: PrepareParams): Promise<typeof request>;
