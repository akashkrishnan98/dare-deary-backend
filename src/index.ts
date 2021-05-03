import apis from "./apis";
import { listerToServer, useExpressJSON } from "./utils/api";

useExpressJSON();

apis.getDiaries();

apis.getEachDiaries();

apis.postDiaries();

apis.putDiaries();

listerToServer();
