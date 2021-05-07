import { Express } from "express";
import { IAuthRequest } from "../../interfaces/app-interfaces";
import EXPRESS_APP from "../../utils/server";
import { authenticateToken } from "../../utils/auth";
import { sendAPIErrorResponse } from "../../utils/api";
import { MockDiariesData } from "../../utils/mock_data";

const getDiaries = (): Express =>
  EXPRESS_APP.get(
    "/api/diaries",
    authenticateToken,
    (req: IAuthRequest, res) => {
      const { user } = req;

      if (!user)
        return sendAPIErrorResponse(
          res,
          500,
          "Something went wrong during authentication"
        );

      const diaries = MockDiariesData.find(
        (diary) => diary.userEmail === user.name
      );
      return res.status(200).send(diaries);
    }
  );

export default getDiaries;
