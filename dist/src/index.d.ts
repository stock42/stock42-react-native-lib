import { type PrepareParams } from './types/types.d.js';
export declare function Stock42(props: PrepareParams): Promise<{
    track: (props: import("./types/types.d.js").ITrack) => void;
    screenshot: (props: import("./types/types.d.js").ITrackScreenshot) => void;
}>;
