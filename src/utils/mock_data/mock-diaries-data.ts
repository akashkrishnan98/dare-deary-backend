import { IDiary } from "../../interfaces/app-interfaces";

const MockDiariesData: IDiary[] = [
  {
    id: "1",
    userEmail: "akashkrishnan98@gmail.com",
    diaryDate: new Date(),
    title: "My first Diary",
    content: "Dear Diary..., Today, I start the backend development for myself",
    createdAt: new Date(),
    lastModifiedAt: new Date(),
  },
  {
    id: "2",
    userEmail: "angelin.jacob0309@gmail.com",
    diaryDate: new Date(),
    title: "My first Diary",
    content: "Dear Diary..., Today, I setup the git CI/CD for myself",
    createdAt: new Date(),
    lastModifiedAt: new Date(),
  },
];

export default MockDiariesData;
