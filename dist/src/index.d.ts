import { PrepareParams, ITrack } from './types.d';
export default function Stock42(props: PrepareParams): Promise<{
    track: (props: ITrack) => Promise<void | import("./types.d").RequestResponse>;
}>;
