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
var assert_1 = require("assert");
var index_js_1 = require("../src/index.js");
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, track_1, screenshot, _loop_1, x, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, index_js_1.Stock42)({
                            appVersion: '1.0',
                            appName: 'Stock42Test',
                            userAgent: 'stock42agent',
                            applicationToken: 'bd23a6fb-02e6-4ac6-8e5c-2aa28bd83db2-FV2AH3',
                            deviceId: '1',
                        })];
                case 1:
                    _a = _b.sent(), track_1 = _a.track, screenshot = _a.screenshot;
                    assert_1.strict.ok(track_1, 'track function should be defined');
                    assert_1.strict.ok(screenshot, 'screenshot function should be defined');
                    _loop_1 = function (x) {
                        setTimeout(function () {
                            track_1({
                                eventName: 'custom',
                                screenName: 'home',
                                functionName: "function".concat(x),
                                data: {
                                    x: x,
                                    msg: 'random number',
                                },
                            });
                        }, 200 * x);
                    };
                    for (x = 0; x < 11; x++) {
                        _loop_1(x);
                    }
                    screenshot({
                        screenName: 'screentesting',
                        base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACClBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKDgUBAgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAtEQcFFx4HAwEAAAArEAcCCAsAAAAiDQUBBQYAAAAEAgEBBAYnNxI2TBktPxQTGwkcJw1qlTCEuzx1ozJxnjBxnjFKaCENEgYMEAVrlzGJwT4/XykYQkgYR08lSTZKaydObSEAAAAyRxeNx0BdgikJICYce6UnpdwknNEab5UlTT8fLA4RBgNVdiaOyUE2TRgIBwkWHyMNPlMgh7QqreYkmc0SRloBAwMTBwNVIw5kjC2Jwj8hMA1paGrNzcxlY2ISHiQTV3Uno9kno9gPPVE8Fgl5MRRijS6Hvz4bJwuFhIb////6+vq6ubkuLy8NQVcijLoEEBZWIA6NNhZYfSiHwD4cKQuEg4Xn5+dHR0cPBQEdY4Iop90LLTxQHg2uQBtDVRx7enz29vaipKU3NTRSIA6lPBYmPUgmotgMMEDOTSBLKxBgji4pPBIdHSBAQEAtFg6MMxPqWCWcOBUYTWQjlMSfPBm/Rx5RLREzIAw/FgiBLhHUUCH2XSe2QhkqLjIhjr4UUWzCSR/qVyXgVCPtWiX3XSfgVCKMOBooPEYehLAXXn15LhOpQBukPhp3LRM3KCQVTGQXZogNNkgDAQABCg4EERf2NICUAAAAI3RSTlMAASuBw+AKbtz+/t1vC475+izb/v7C3/7+23D6+o/6+pD+/nx5/ywAAAABYktHRGIruR08AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH6AIGDx0mT1WRLwAAAQdJREFUGNNjYGBgYGRiZmFlZWFmYmQAAzZ2Dk5lFVU1Lm4eXjCfj19dQ1NLW0dXj5+PDSjAw69vYGhkbGJqZq4nwMPAIChkYWllbWNrZ+/g6GQhJMjALOzs4urm7uHp5e3j6yfCzCDqHxAYFBwSGhYeERkVbcHCIBYTGxefkJiUnJKaFpmeIcYglpmVnZObl5SUX1BYVFzCyiBaWlaeE1xRWVVdU1tX38DCwCze2NTc0trW3tHZ1d0jwcwgKNnb1z9h4qTJU6ZOmz6DQ5CBQUp65qzZc+bOm79g4SIZKaBLeWXlFi9Zumz5ipWr5BXAnuGV4lZcbbFmrRK3FC/Eu4yCEO8LgrwPAD5TP1gt5ja0AAAAPHRFWHRDb21tZW50AHhyOmQ6REFGN2tlTk1rQjg6NDQsajo1NjI0Mjg3ODc5MDUwODQ4NTMwLHQ6MjQwMjA2MTQOLTypAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTAyLTA2VDE1OjI5OjM4KzAwOjAw7iETDQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wMi0wNlQxNToyOTozOCswMDowMJ98q7EAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=',
                    });
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _b.sent();
                    console.info('Error: ', err_1);
                    process.exit(1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
init();
