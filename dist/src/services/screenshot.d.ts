import { type Request } from '../lib/request.js';
import { type ITrackScreenshot } from '../types/types.d.js';
export declare class Screenshot {
    private readonly request;
    private static instance;
    constructor(request: Request);
    static getInstance(request: Request): Screenshot;
    screenshot(props: ITrackScreenshot): void;
}
