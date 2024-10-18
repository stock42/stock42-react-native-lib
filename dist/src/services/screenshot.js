"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Screenshot = void 0;
class Screenshot {
    request;
    static instance;
    constructor(request) {
        this.request = request;
        return this;
    }
    static getInstance(request) {
        if (!Screenshot.instance) {
            Screenshot.instance = new Screenshot(request);
        }
        return Screenshot.instance;
    }
    screenshot(props) {
        this.request.fetch({
            method: 'POST',
            data: {
                ...props,
                eventName: 'screenshot',
            },
            sid: 'asdasd',
            path: '',
        });
    }
}
exports.Screenshot = Screenshot;
