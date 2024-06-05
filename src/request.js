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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.request = void 0;
var ports = [4530, 4531];
var getPort = function () { return String(ports[Math.round(Math.random() * 1)]); };
var PATH = 'hits';
var appVersion = '';
var userAgent = '';
var appName = '';
var sid = '';
var deviceId = '';
var applicationToken = '';
function request(params) {
    return __awaiter(this, void 0, void 0, function () {
        var requestUUID, finalHeaders, requestOptions, HOST, url, response, data, toResponse, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestUUID = new Date().getTime().toString(32) + '-' + Math.random().toString(32) + '-' + (Math.random() * 100).toString(32) + '-' + (Math.random() * 100).toString(32);
                    finalHeaders = {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'user-agent': userAgent,
                        'app-version': appVersion,
                        'app-name': appName,
                        'app-token': applicationToken,
                        deviceId: deviceId,
                        sid: sid,
                        requestUUID: requestUUID,
                    };
                    requestOptions = {
                        method: params.method.toUpperCase(),
                        headers: finalHeaders,
                        body: params.method.toUpperCase() !== 'GET' && params.data ? JSON.stringify(params.data) : undefined,
                    };
                    HOST = (process === null || process === void 0 ? void 0 : process.env.NODE_ENV) === 'PROD' ? 'https://services.visiongroup.nyc/core' : "http://localhost:".concat(getPort());
                    console.info('HOST: ', HOST);
                    url = new URL("".concat(HOST, "/").concat(PATH).concat(params.path));
                    if (params.query) {
                        Object.keys(params.query).forEach(function (key) { return url.searchParams.append(key, params.query[key]); });
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(url.toString(), requestOptions)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    toResponse = __assign(__assign({}, data), { status: response.status });
                    if (response.status !== 200)
                        throw new Error("Error: Stock42 Hits is not init: ".concat(response.status, " : ").concat(toResponse.msg));
                    return [2 /*return*/, toResponse];
                case 4:
                    error_1 = _a.sent();
                    console.error('Stock42 Fetch error:', error_1);
                    throw error_1;
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.request = request;
function init(options) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    deviceId = options.deviceId;
                    userAgent = options.userAgent;
                    appVersion = options.appVersion;
                    appName = options.appName;
                    applicationToken = options.applicationToken;
                    return [4 /*yield*/, request(__assign(__assign({ method: 'GET', path: '/init' }, options), { sid: sid }))];
                case 1:
                    result = _a.sent();
                    sid = result.msg;
                    return [2 /*return*/, sid];
            }
        });
    });
}
exports.init = init;
