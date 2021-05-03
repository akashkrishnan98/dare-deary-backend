"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apis_1 = __importDefault(require("./apis"));
var api_1 = require("./utils/api");
api_1.useExpressJSON();
apis_1.default.getDiaries();
apis_1.default.getEachDiaries();
apis_1.default.postDiaries();
apis_1.default.putDiaries();
api_1.listerToServer();
//# sourceMappingURL=index.js.map