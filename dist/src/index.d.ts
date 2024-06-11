import { type PrepareParams, type ITrack, type ITrackScreenshot } from './types.d';
export declare function Stock42(props: PrepareParams): Promise<{
    track: (props: ITrack) => Promise<import("./types.d").RequestResponse>;
    screenshot: (props: ITrackScreenshot) => Promise<import("./types.d").RequestResponse>;
}>;
