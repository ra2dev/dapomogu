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
                  type: NextType.REDIRECT_EXTERNAL,
                  link: "https://vbanke.info/news/otkrytye-dlya-rossiyan-strany.html",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Машиной в Армению",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId:
                    "https://vbanke.info/news/otkrytye-dlya-rossiyan-strany.html",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Шенген в Калинграде и рабочая виза для Россиян",
                  },
                },
                next: {
                  type: NextType.REDIRECT_EXTERNAL,
                  link: "https://instagram.com/shengen_viza39?utm_medium=copy_link",
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
                  type: NextType.REDIRECT_EXTERNAL,
                  link: "https://www.instagram.com/p/CaxWVEuolcG/?utm_medium=copy_link",
                },
              },
            ],
          },
        },
      },
    ],
  },
};
