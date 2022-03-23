import { AnswerType, FlowConfig, NextType } from "../questions";

export const ruBranch: FlowConfig["questions"] = {
  ["rus-select"]: {
    answers: [
      {
        answer: {
          type: AnswerType.COMMON_SELECT,
          config: {
            text: "Ваши права/как обезопасить себя?",
            icon: "⛑",
          },
        },
        next: {
          type: NextType.QUESTION,
          question: {
            answers: [
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Eсли вы решили остаться в России",
                  },
                },
                next: {
                  type: NextType.REDIRECT_EXTERNAL,
                  link: "https://mailchi.mp/getkit.news/survive",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Ваши права в России",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "be4cd2aebc374a75b9894acea66279ce",
                },
              },
            ],
          },
        },
      },
      {
        answer: {
          type: AnswerType.COMMON_SELECT,
          config: {
            text: "Как выехать из России в случае призыва или военных действий",
            icon: "🏃‍",
          },
        },
        next: {
          type: NextType.QUESTION,
          question: {
            answers: [
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Самолет",
                    icon: "✈️",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "dc8593eee70b4d04953cdb9444f16a26",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Машина",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId:
                    "9f5d46dc0ff04e1295ac58b02ee5971b",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Как собрать тревожный чемоданчик",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "50e39f10e09b4d44be703eb5c8caab04",
                },
              },
            ],
          },
        },
      },
    ],
  },
};
