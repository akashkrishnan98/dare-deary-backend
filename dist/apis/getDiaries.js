"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __importDefault(require("../utils/api"));
var mock_data_1 = require("../utils/mock_data");
var getDiaries = function () {
    return api_1.default.get("/api/diaries", function (_req, res) {
        res.send(mock_data_1.MockDiariesData);
    });
};
exports.default = getDiaries;
//# sourceMappingURL=getDiaries.js.map