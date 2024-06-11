import { type PrepareParams, type RequestParams, type RequestResponse } from './types.d';
export declare function request(params: RequestParams): Promise<RequestResponse>;
export declare function init(options: PrepareParams): Promise<string>;
