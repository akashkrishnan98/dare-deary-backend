import { Express } from "express";
import { IAuthRequest } from "../../interfaces/app-interfaces";
import { MockData } from "../../utils";
import EXPRESS_APP from "../../utils/server";
import { authenticateToken } from "../../utils/auth";
import { sendAPIErrorResponse } from "../../utils/api";

const getEachDiaries = (): Express =>
  EXPRESS_APP.get(
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

      const diary = MockData.MockDiariesData.find(
        (diary) => diary.id === params.id && diary.userEmail === user.name
      );
      if (!diary) return sendAPIErrorResponse(res, 404, "Diary not found");

      res.send(diary);
    }
  );

export default getEachDiaries;
