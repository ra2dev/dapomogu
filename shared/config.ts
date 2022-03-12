import { AnswerType, FlowConfig, NextType, QuestionType } from "./questions";

export const flowConfig: FlowConfig = {
  questions: {
    root: {
      question: {
        type: QuestionType.ROOT,
      },
      answers: [
        {
          answer: {
            type: AnswerType.HELP_SELECT,
            config: {
              icon: "🆘",
              text: "Мне нужна помощь",
              description: "Найти как добраться в страну следования.",
              className:
                "bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]",
            },
          },
          next: {
            type: NextType.QUESTION,
            questionId: "select-country",
          },
        },
        {
          answer: {
            type: AnswerType.HELP_SELECT,
            config: {
              icon: "🤝",
              text: "Я могу помочь",
              description: "Я хочу помочь людям пострадавших от войны.",
              className: "bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]",
            },
          },
          next: {
            type: NextType.REDIRECT,
            postId: "help-state",
          },
        },
      ],
    },
    ["select-country"]: {
      question: {
        text: "В какой стране вы сейчас?",
      },
      answers: [
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
            questionId: "ukraine-select",
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
            type: NextType.QUESTION,
            questionId: "belarus-select",
          },
        },
      ],
    },
    ["belarus-select"]: {
      question: {
        text: "Ваш статус?",
      },
      answers: [
        {
          answer: {
            type: AnswerType.COMMON_SELECT,
            config: {
              text: "Я не резидент РБ и хочу выехать из страны",
            },
          },
          next: {
            type: NextType.QUESTION,
            questionId: "belarus-non-belarusian",
          },
        },
        {
          answer: {
            type: AnswerType.ARTICLE_PREVIEW,
            config: {
              text: "Хочу узнать опыт других людей",
            },
          },
          next: {
            type: NextType.REDIRECT,
            postId: "belarus-leave-experience",
          },
        },
      ],
    },
    ["ukraine-select"]: {
      question: {
        text: "Полезные статьи:",
      },
      answers: [
        {
          answer: {
            type: AnswerType.ARTICLE_PREVIEW,
            config: {
              text: "Что собрать в тревожный чемоданчик",
            },
          },
          next: {
            type: NextType.REDIRECT,
            postId: "9c85d27b832c47238e6429ad290e13ee",
          },
        },
        {
          answer: {
            type: AnswerType.ARTICLE_PREVIEW,
            config: {
              text: "Приюты в Западной Украине",
            },
          },
          next: {
            type: NextType.REDIRECT,
            postId: "9c85d27b832c47238e6429ad290e13ee",
          },
        },
      ],
    },
    ["belarus-non-belarusian"]: {
      question: {
        text: "Есть ли виза стран шенгена?",
      },
      answers: [
        {
          answer: {
            type: AnswerType.COMMON_SELECT,
            config: {
              text: "Самолеты",
            },
          },
          next: {
            type: NextType.REDIRECT,
            postId: "7571be367b6f4dd1b752c230f991d695",
          },
        },
        {
          answer: {
            type: AnswerType.COMMON_SELECT,
            config: {
              text: "Нет",
            },
          },
          next: {
            type: NextType.REDIRECT,
            postId: "belarus-has-no-eu",
          },
        },
      ],
    },
  },
};
