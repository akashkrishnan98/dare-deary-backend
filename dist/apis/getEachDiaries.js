"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var api_1 = __importDefault(require("../utils/api"));
var getEachDiaries = function () {
    return api_1.default.get("/api/diaries/:id", function (req, res) {
        var diary = utils_1.MockData.MockDiariesData.find(function (diary) { return diary.id === req.params.id; });
        if (!diary)
            res.status(404).send("404. Diary not found..");
        res.send(diary);
    });
};
exports.default = getEachDiaries;
//# sourceMappingURL=getEachDiaries.js.map