"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.request = void 0;
const PATH = 'hits';
let appVersion = '';
let userAgent = '';
let appName = '';
let sid = '';
let deviceId = '';
let applicationToken = '';
async function request(params) {
    const requestUUID = new Date().getTime().toString(32) +
        '-' +
        Math.random().toString(32) +
        '-' +
        (Math.random() * 100).toString(32) +
        '-' +
        (Math.random() * 100).toString(32);
    const finalHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'user-agent': userAgent,
        'app-version': appVersion,
        'app-name': appName,
        'app-token': applicationToken,
        deviceId,
        sid,
        requestUUID,
    };
    const requestOptions = {
        method: params.method.toUpperCase(),
        headers: finalHeaders,
        body: params.method.toUpperCase() !== 'GET' && params.data ?
            JSON.stringify(params.data)
            : undefined,
    };
    const HOST = 'https://services.visiongroup.nyc/core';
    const url = new URL(`${HOST}/${PATH}${params.path}`);
    if (params.query) {
        Object.keys(params.query).forEach(key => url.searchParams.append(key, params.query[key]));
    }
    const response = await fetch(url.toString(), requestOptions);
    const data = await response.json();
    const toResponse = { ...data, status: response.status };
    if (response.status !== 200) {
        throw new Error(`Error: Stock42 Hits is not init: ${response.status} : ${toResponse.msg}`);
    }
    return toResponse;
}
exports.request = request;
async function init(options) {
    deviceId = options.deviceId;
    userAgent = options.userAgent;
    appVersion = options.appVersion;
    appName = options.appName;
    applicationToken = options.applicationToken;
    const result = await request({
        method: 'GET',
        path: '/init',
        ...options,
        sid,
    });
    sid = result.msg;
    return sid;
}
exports.init = init;
