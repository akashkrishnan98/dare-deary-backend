"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getDiaries_1 = __importDefault(require("./getDiaries"));
var getEachDiaries_1 = __importDefault(require("./getEachDiaries"));
var postDiaries_1 = __importDefault(require("./postDiaries"));
var putDiaries_1 = __importDefault(require("./putDiaries"));
var apis = { getDiaries: getDiaries_1.default, getEachDiaries: getEachDiaries_1.default, postDiaries: postDiaries_1.default, putDiaries: putDiaries_1.default };
exports.default = apis;
//# sourceMappingURL=index.js.map