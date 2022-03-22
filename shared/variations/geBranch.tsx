import { AnswerType, FlowConfig, NextType } from "../questions";

export const geBranch: FlowConfig["questions"] = {
  ["ge-select"]: {
    question: {
      text: "Грузия",
    },
    answers: [
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Поиск Жилья",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "1fee6e7afd12464ebdd9e82decf44d90",
        },
      },
    ],
  },
};
