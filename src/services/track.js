"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = void 0;
var Track = /** @class */ (function () {
    function Track(request) {
        this.request = request;
    }
    Track.getInstance = function (request) {
        if (!Track.instance) {
            Track.instance = new Track(request);
        }
        return Track.instance;
    };
    Track.prototype.track = function (props) {
        this.request.fetch({
            method: 'POST',
            data: __assign({}, props),
            sid: 'asdasd',
            path: '',
        });
    };
    return Track;
}());
exports.Track = Track;
