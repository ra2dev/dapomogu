import { AnswerType, FlowConfig, NextType } from "../questions";

export const uaBranch: FlowConfig["questions"] = {
  ["ukraine-select"]: {
    question: {
      text: "Полезные статьи:",
    },
    answers: [
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Приюты в Украина",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "be0689b57dff464e9811a751140e2db6",
        },
      },
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Выехать из Украины",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "2a95e9f299564dd0b7e60889fe315410",
        },
      },
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "гуманитарная помощь/психологическая помощь",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "6ceff80eceb945ff90b58e8a27912f1c",
        },
      },
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Работа онлайн/обучение онлайн",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "c338e692fc3e4f268111bacded9cb917",
        },
      },
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Тревожный чемоданчик для выезда за границу",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "0e075f1ede6a4622a1f41b928aa09c0c",
        },
      },
    ],
  },
};
