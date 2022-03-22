import { AnswerType, FlowConfig, NextType, QuestionType } from "../questions";

export const baseBranch: FlowConfig["questions"] = {
  root: {
    question: {
      type: QuestionType.ROOT,
    },
    answers: [
      {
        answer: {
          type: AnswerType.COMMON_SELECT,
          config: {
            iconType: "NeedHelpIcon",
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
          type: AnswerType.COMMON_SELECT,
          config: {
            iconType: "CanHelpIcon",
            text: "Я могу помочь",
            description: "Я хочу помочь людям пострадавших от войны.",
            className: "bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "9c85d27b832c47238e6429ad290e13ee",
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
          questionId: "europe-select",
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
          type: NextType.QUESTION,
          questionId: "rus-select",
        },
      },
      {
        answer: {
          type: AnswerType.COUNTRY_SELECT,
          config: {
            text: "Грузия",
            flag: "georgia",
          },
        },
        next: {
          type: NextType.QUESTION,
          questionId: "rus-select",
        },
      },
      {
        answer: {
          type: AnswerType.COUNTRY_SELECT,
          config: {
            text: "Турция",
            flag: "turkey",
          },
        },
        next: {
          type: NextType.QUESTION,
          questionId: "rus-select",
        },
      },
    ],
  },
};
