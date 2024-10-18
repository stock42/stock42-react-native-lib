"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = void 0;
class Track {
    request;
    static instance;
    constructor(request) {
        this.request = request;
    }
    static getInstance(request) {
        if (!Track.instance) {
            Track.instance = new Track(request);
        }
        return Track.instance;
    }
    track(props) {
        this.request.fetch({
            method: 'POST',
            data: {
                ...props,
            },
            sid: 'asdasd',
            path: '',
        });
    }
}
exports.Track = Track;
