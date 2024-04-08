"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepare = void 0;
const HOST = (process === null || process === void 0 ? void 0 : process.env.NODE_ENV) === 'PROD' ? 'https://hits.visiongroup.nyc' : 'http://localhost:4567';
const PATH = '/hit';
let appVersion = '';
let userAgent = '';
let appName = '';
function request(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestUUID = new Date().getTime().toString(32) + '-' + Math.random().toString(32) + '-' + (Math.random() * 100).toString(32) + '-' + (Math.random() * 100).toString(32);
        const finalHeaders = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'user-agent': userAgent,
            'app-version': appVersion,
            'app-name': appName,
            requestUUID,
        };
        const requestOptions = {
            method: params.method.toUpperCase(),
            headers: finalHeaders,
            body: params.method.toUpperCase() !== 'GET' && params.data ? JSON.stringify(params.data) : undefined,
        };
        const url = new URL(`${HOST}/${PATH}${params.path}`);
        if (params.query) {
            Object.keys(params.query).forEach(key => url.searchParams.append(key, params.query[key]));
        }
        try {
            const response = yield fetch(url.toString(), requestOptions);
            const data = yield response.json();
            return { data: data, status: response.status };
        }
        catch (error) {
            console.error('Stock 42 Fetch error:', error);
        }
    });
}
function prepare(_a) {
    return __awaiter(this, arguments, void 0, function* ({ version = '1.0.0', useragent = 'app-user-agent', appname = 'ApplicationName', applicationKey = 'no-app-key', }) {
        appVersion = version;
        userAgent = useragent;
        appName = appname;
        const result = yield request({
            method: 'GET',
            path: '/getsid',
        });
        console.info('result: ', result);
        return request;
    });
}
exports.prepare = prepare;
