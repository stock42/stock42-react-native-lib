import { type Request } from '../lib/request.js';
import { type ITrack } from '../types/types.js';
export declare class Track {
    private readonly request;
    private static instance;
    constructor(request: Request);
    static getInstance(request: Request): Track;
    track(props: ITrack): void;
}
