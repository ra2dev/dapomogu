import { AnswerType, NextType, QuestionItemConfig } from "../questions";

export const canHelpBranch: Record<string, QuestionItemConfig> = {
  ["can-help"]: {
    question: {
      text: "В какой стране Вы сейчас?",
    },
    answers: [
      {
        answer: {
          type: AnswerType.COMMON_SELECT,
          config: {
            text: "Помощь из любой точки мира",
            icon: "🌍",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "26bb6d29f5c04a209e246527f0f6b5d1",
        },
      },
      {
        answer: {
          type: AnswerType.COUNTRY_SELECT,
          config: {
            text: "Украина",
            flag: "ukraine",
          },
        },
        next: {
          type: NextType.QUESTION,
          question: {
            slug: 'uk-can-help',
            answers: [
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Помощь волонтёрам (финансовая и другая)",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "65809ec70e054cd3aed4dece2faa7534",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Предложить жильё/приют",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "6ebd927a7e7646b685583525081f998f",
                },
              },
            ],
          },
        },
      },
      {
        answer: {
          type: AnswerType.COUNTRY_SELECT,
          config: {
            text: "Россия",
            flag: "russian",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "c54dba5ba4ad4348bb92b8112ee8356e",
        },
      },
      {
        answer: {
          type: AnswerType.COUNTRY_SELECT,
          config: {
            text: "Беларусь",
            flag: "belarus",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "cbfec7e118394113bdd85df4929e7226",
        },
      },
      {
        answer: {
          type: AnswerType.COUNTRY_SELECT,
          config: {
            text: "Россия",
            flag: "russian",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "c54dba5ba4ad4348bb92b8112ee8356e",
        },
      },
      {
        answer: {
          type: AnswerType.COUNTRY_SELECT,
          config: {
            text: "Европа",
            flag: "europe",
          },
        },
        next: {
          type: NextType.QUESTION,
          question: {
            slug: 'eu-can-help',
            answers: [
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Предложить жильё в ЕС",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "4727486752364397977c5b7eacb5ee7d",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Литва",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "2657f63b0d0541cf83d5de4143910991",
                },
              },
            ],
          },
        },
      },
    ],
  },
};
