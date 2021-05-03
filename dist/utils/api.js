"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useExpressJSON = exports.listerToServer = void 0;
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("../config"));
var PORT = (_a = config_1.default.PORT) !== null && _a !== void 0 ? _a : 3000;
var EXPRESS_APP = express_1.default();
var useExpressJSON = function () { return EXPRESS_APP.use(express_1.default.json()); };
exports.useExpressJSON = useExpressJSON;
var listerToServer = function () {
    return EXPRESS_APP.listen(PORT, function () { return console.log("Listening on port " + PORT + ".."); });
};
exports.listerToServer = listerToServer;
exports.default = EXPRESS_APP;
//# sourceMappingURL=api.js.map