"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var api_1 = __importDefault(require("../utils/api"));
var generic_1 = require("../utils/generic");
var postDiaries = function () {
    return api_1.default.post("/api/diaries", function (req, res) {
        var _a = req.body, title = _a.title, content = _a.content, userEmail = _a.userEmail, diaryDate = _a.diaryDate;
        var id = (utils_1.MockData.MockDiariesData.length + 1).toString();
        var currentTimeStamp = new Date();
        var mandatoryFields = [
            { key: "title", value: title },
            { key: "content", value: content },
            { key: "userEmail", value: userEmail },
            { key: " diaryDate", value: diaryDate },
        ];
        mandatoryFields.forEach(function (field) {
            var isFieldPresent = generic_1.validations.isMandatory(field.value);
            if (!isFieldPresent)
                res
                    .status(400)
                    .send({ err: 400, message: "The " + field.key + " field is mandatory" });
        });
        var newDiary = {
            id: id,
            userEmail: userEmail,
            diaryDate: diaryDate,
            title: title,
            content: content,
            createdAt: currentTimeStamp,
            lastModifiedAt: currentTimeStamp,
        };
        utils_1.MockData.MockDiariesData.push(newDiary);
        res.send(newDiary);
    });
};
exports.default = postDiaries;
//# sourceMappingURL=postDiaries.js.map