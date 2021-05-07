import { Express, Response } from "express";
import { IAuthRequest, IKeyValue } from "../../interfaces/app-interfaces";
import { MockData } from "../../utils";
import EXPRESS_APP from "../../utils/server";
import { authenticateToken } from "../../utils/auth";
import { sendAPIErrorResponse } from "../../utils/api";

import { validations } from "../../utils/generic";

const postDiaries = (): Express =>
  EXPRESS_APP.post(
    "/api/diaries",
    authenticateToken,
    (req: IAuthRequest, res: Response) => {
      const { user } = req;
      if (!user)
        return sendAPIErrorResponse(
          res,
          500,
          "Something went wrong during authentication"
        );

      const { title, content, diaryDate } = req.body;
      const id = (MockData.MockDiariesData.length + 1).toString();
      const currentTimeStamp = new Date();
      const mandatoryFields: IKeyValue<unknown>[] = [
        { key: "title", value: title },
        { key: "content", value: content },
        { key: "diaryDate", value: diaryDate },
      ];

      mandatoryFields.forEach((field) => {
        const isFieldPresent = validations.isMandatory(field.value);
        if (!isFieldPresent)
          return sendAPIErrorResponse(
            res,
            400,
            `The ${field.key} field is mandatory`
          );
      });

      const newDiary = {
        id,
        userEmail: user.name,
        diaryDate,
        title,
        content,
        createdAt: currentTimeStamp,
        lastModifiedAt: currentTimeStamp,
      };

      MockData.MockDiariesData.push(newDiary);

      res.send(newDiary);
    }
  );

export default postDiaries;
