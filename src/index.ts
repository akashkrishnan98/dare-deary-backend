import apis from "./apis";
import { listerToServer } from "./utils/server";

// Diary APIS
apis.diaryApis.getDiaries();
apis.diaryApis.getEachDiaries();
apis.diaryApis.postDiaries();
apis.diaryApis.putDiaries();

listerToServer();
