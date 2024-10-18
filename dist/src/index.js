"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock42 = Stock42;
const request_1 = require("./lib/request");
const services_1 = require("./services");
async function Stock42(props) {
    try {
        const request = await new request_1.Request(props).init();
        return {
            track: new services_1.Track(request).track,
            screenshot: new services_1.Screenshot(request).screenshot,
        };
    }
    catch (err) {
        throw new Error('Error initializing Stock42 for React Native');
    }
}
