"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock42 = void 0;
const request_1 = require("./request");
async function Stock42(props) {
    try {
        await (0, request_1.init)(props);
        const track = (props) => (0, request_1.request)({
            method: 'POST',
            data: {
                ...props,
            },
            sid: 'asdasd',
            path: '',
        });
        const screenshot = (props) => (0, request_1.request)({
            method: 'POST',
            data: {
                ...props,
                eventName: 'screenshot',
            },
            sid: 'asdasd',
            path: '',
        });
        return { track, screenshot };
    }
    catch (err) {
        throw new Error('Error initializing Stock42');
    }
}
exports.Stock42 = Stock42;
