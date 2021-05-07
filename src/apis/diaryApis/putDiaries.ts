import { Express } from "express";
import { IAuthRequest } from "../../interfaces/app-interfaces";
import { MockData } from "../../utils";
import EXPRESS_APP from "../../utils/server";
import { authenticateToken } from "../../utils/auth";
import { sendAPIErrorResponse } from "../../utils/api";

const putDiaries = (): Express =>
  EXPRESS_APP.put(
    "/api/diaries/:id",
    authenticateToken,
    (req: IAuthRequest, res) => {
      const { user, params } = req;

      if (!user)
        return sendAPIErrorResponse(
          res,
          500,
          "Something went wrong during authentication"
        );

      const { id } = params;
      if (!id) return sendAPIErrorResponse(res, 400, "id is required to PUT");

      let matchedDiary = MockData.MockDiariesData.find(
        (diary) => diary.id === id && diary.userEmail === user.name
      );

      if (!matchedDiary)
        return sendAPIErrorResponse(res, 404, "Diary with this id not found");

      const { title, content, diaryDate } = req.body;
      matchedDiary = {
        ...matchedDiary,
        title: title ?? matchedDiary.title,
        content: content ?? matchedDiary.content,
        diaryDate: diaryDate ?? matchedDiary.diaryDate,
        lastModifiedAt: new Date(),
      };

      res.send(matchedDiary);
    }
  );

export default putDiaries;
