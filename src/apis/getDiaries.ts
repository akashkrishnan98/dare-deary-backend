import { Express } from "express";
import EXPRESS_APP from "../utils/api";
import { MockDiariesData } from "../utils/mock_data";

const getDiaries = (): Express =>
  EXPRESS_APP.get("/api/diaries", (_req, res) => {
    res.send(MockDiariesData);
  });

export default getDiaries;
