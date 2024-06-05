"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../src/index"));
try {
    const initialized = (0, index_1.default)({
        appVersion: '1.0',
        appName: 'Stock42Test',
        userAgent: 'stock42agent',
        applicationToken: 'bd23a6fb-02e6-4ac6-8e5c-2aa28bd83db2-FV2AH3',
        deviceId: '1'
    });
}
catch (err) {
    console.info('Fatal Hit Errors: ', err);
}
