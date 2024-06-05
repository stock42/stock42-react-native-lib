"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("./request");
async function Stock42(props) {
    try {
        const instanceSID = await (0, request_1.init)(props);
        console.info('instanceSID: ', instanceSID);
        return {
            track: (props) => (0, request_1.request)({
                method: 'POST',
                data: {
                    ...props,
                },
                sid: 'asdasd',
            })
        };
    }
    catch (err) {
        throw new Error('Error initializing Stock42');
    }
}
exports.default = Stock42;
