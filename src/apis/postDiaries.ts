import { Express } from "express";
import { IKeyValue } from "../interfaces/app-interfaces";
import { MockData } from "../utils";
import EXPRESS_APP from "../utils/api";
import { validations } from "../utils/generic";

const postDiaries = (): Express =>
  EXPRESS_APP.post("/api/diaries", (req, res) => {
    const { title, content, userEmail, diaryDate } = req.body;
    const id = (MockData.MockDiariesData.length + 1).toString();
    const currentTimeStamp = new Date();
    const mandatoryFields: IKeyValue<unknown>[] = [
      { key: "title", value: title },
      { key: "content", value: content },
      { key: "userEmail", value: userEmail },
      { key: " diaryDate", value: diaryDate },
    ];

    mandatoryFields.forEach((field) => {
      const isFieldPresent = validations.isMandatory(field.value);
      if (!isFieldPresent)
        res
          .status(400)
          .send({ err: 400, message: `The ${field.key} field is mandatory` });
    });

    const newDiary = {
      id,
      userEmail,
      diaryDate,
      title,
      content,
      createdAt: currentTimeStamp,
      lastModifiedAt: currentTimeStamp,
    };

    MockData.MockDiariesData.push(newDiary);

    res.send(newDiary);
  });

export default postDiaries;
