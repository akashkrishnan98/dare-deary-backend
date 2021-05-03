import { Express } from "express";
import { MockData } from "../utils";
import EXPRESS_APP from "../utils/api";

const putDiaries = (): Express =>
  EXPRESS_APP.put("/api/diaries/:id", (req, res) => {
    const { id } = req.params;

    if (!id)
      res.status(400).send({ status: 400, message: "id is required to PUT" });

    let matchedDiary = MockData.MockDiariesData.find(
      (diary) => diary.id === id
    );

    if (!matchedDiary) {
      res
        .status(404)
        .send({ status: 404, message: "Diary with this id not found" });
      return;
    }

    const { title, content, diaryDate } = req.body;
    matchedDiary = {
      ...matchedDiary,
      title: title ?? matchedDiary.title,
      content: content ?? matchedDiary.content,
      diaryDate: diaryDate ?? matchedDiary.diaryDate,
      lastModifiedAt: new Date(),
    };

    res.send(matchedDiary);
  });

export default putDiaries;
