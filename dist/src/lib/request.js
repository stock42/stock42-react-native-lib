"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
class Request {
    PATH = 'hits';
    HOST = 'http://api.stock42.com/';
    static instance;
    appVersion = '';
    userAgent = '';
    appName = '';
    sid = '';
    deviceId = '';
    applicationToken = '';
    generateRequestUUID() {
        return (new Date().getTime().toString(32) +
            '-' +
            Math.random().toString(32) +
            '-' +
            (Math.random() * 100).toString(32) +
            '-' +
            (Math.random() * 100).toString(32));
    }
    async fetch(params) {
        const requestUUID = this.generateRequestUUID();
        const finalHeaders = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'user-agent': this.userAgent,
            'app-version': this.appVersion,
            'app-name': this.appName,
            'app-token': this.applicationToken,
            deviceId: this.deviceId,
            sid: this.sid,
            requestUUID,
        };
        const requestOptions = {
            method: params.method.toUpperCase(),
            headers: finalHeaders,
            body: params.method.toUpperCase() !== 'GET' && params.data ?
                JSON.stringify(params.data)
                : undefined,
        };
        const url = new URL(`${this.HOST}/${this.PATH}${params.path}`);
        if (params.query) {
            Object.keys(params.query).forEach(key => url.searchParams.append(key, params.query[key]));
        }
        const response = await fetch(url.toString(), requestOptions);
        const data = await response.json();
        const toResponse = { ...data, status: response.status };
        if (response.status !== 200) {
            throw new Error(`Error: Stock42 for React Native is not init: ${response.status} : ${toResponse.msg}`);
        }
        return toResponse;
    }
    constructor(options) {
        this.deviceId = options.deviceId;
        this.userAgent = options.userAgent;
        this.appVersion = options.appVersion;
        this.appName = options.appName;
        this.applicationToken = options.applicationToken;
    }
    getInstance(options) {
        if (!Request.instance) {
            Request.instance = new Request(options);
        }
        return Request.instance;
    }
    async init() {
        const result = await this.fetch({
            method: 'GET',
            path: '/init',
            sid: this.sid,
        });
        this.sid = result.msg;
        return this;
    }
    getSID() {
        return this.sid;
    }
}
exports.Request = Request;
