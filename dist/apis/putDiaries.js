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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var api_1 = __importDefault(require("../utils/api"));
var putDiaries = function () {
    return api_1.default.put("/api/diaries/:id", function (req, res) {
        var id = req.params.id;
        if (!id)
            res.status(400).send({ status: 400, message: "id is required to PUT" });
        var matchedDiary = utils_1.MockData.MockDiariesData.find(function (diary) { return diary.id === id; });
        if (!matchedDiary) {
            res
                .status(404)
                .send({ status: 404, message: "Diary with this id not found" });
            return;
        }
        var _a = req.body, title = _a.title, content = _a.content, diaryDate = _a.diaryDate;
        matchedDiary = __assign(__assign({}, matchedDiary), { title: title !== null && title !== void 0 ? title : matchedDiary.title, content: content !== null && content !== void 0 ? content : matchedDiary.content, diaryDate: diaryDate !== null && diaryDate !== void 0 ? diaryDate : matchedDiary.diaryDate, lastModifiedAt: new Date() });
        res.send(matchedDiary);
    });
};
exports.default = putDiaries;
//# sourceMappingURL=putDiaries.js.map