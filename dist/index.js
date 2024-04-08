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
const request_1 = require("./request");
let request = null;
function init(applicationKey) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            request = yield (0, request_1.prepare)({
                applicationKey,
            });
        }
        catch (err) {
            console.info('Error initializing Stock42');
        }
    });
}
exports.default = init;
