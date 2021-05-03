import { Express } from "express";
import { MockData } from "../utils";
import EXPRESS_APP from "../utils/api";

const getEachDiaries = (): Express =>
  EXPRESS_APP.get("/api/diaries/:id", (req, res) => {
    const diary = MockData.MockDiariesData.find(
      (diary) => diary.id === req.params.id
    );
    if (!diary) res.status(404).send("404. Diary not found..");
    res.send(diary);
  });

export default getEachDiaries;
