import { AnswerType, FlowConfig, NextType } from "../questions";

export const trBranch: FlowConfig["questions"] = {
  ["ge-select"]: {
    question: {
      text: "Турция",
    },
    answers: [
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Социальная жизнь и Легализация",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "44515343fd0d493494a2f73887cb0bfd",
        },
      },
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Поиск жилья Бесплатно",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "1fee6e7afd12464ebdd9e82decf44d90",
        },
      },
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Поиск жилья Платно",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "c0cdb7d705ee40a69098dfe5f30519e2",
        },
      },
    ],
  },
};
