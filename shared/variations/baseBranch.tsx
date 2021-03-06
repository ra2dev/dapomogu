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
          },
        },
        next: {
          type: NextType.QUESTION,
          questionId: "need-help-select-country",
        },
      },
      {
        answer: {
          type: AnswerType.COMMON_SELECT,
          config: {
            iconType: "CanHelpIcon",
            iconClassName: "select-secondary-icon",
            text: "Я хочу помочь",
            description: "Помочь людям, пострадавшим от войны.",
          },
        },
        next: {
          type: NextType.QUESTION,
          questionId: "can-help",
        },
      },
    ],
  },
  ["need-help-select-country"]: {
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
          questionId: "eu-select",
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
          questionId: "ge-select",
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
            text: "Турция",
            flag: "turkey",
          },
        },
        next: {
          type: NextType.QUESTION,
          questionId: "tr-select",
        },
      },
    ],
  },
};
