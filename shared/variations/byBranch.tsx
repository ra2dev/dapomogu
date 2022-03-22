import { AnswerType, FlowConfig, NextType } from "../questions";

export const byBranch: FlowConfig["questions"] = {
  ["belarus-select"]: {
    question: {
      text: "Ваш статус?",
    },
    answers: [
      {
        answer: {
          type: AnswerType.COMMON_SELECT,
          config: {
            text: "Я гражданин РБ хочу выехать из страны",
            icon: "🏃‍️",
          },
        },
        next: {
          type: NextType.QUESTION,
          questionId: "belarus-run-from",
        },
      },
      {
        answer: {
          type: AnswerType.COMMON_SELECT,
          config: {
            text: "Я НЕ резидент РБ хочу выехать из страны",
            icon: "﹖️",
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
          type: NextType.REDIRECT_EXTERNAL,
          link: "https://telegra.ph/Prakticheskij-opyt-vyezda-iz-Belarusi-03-10",
        },
      },
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Что собрать в тревожный чемоданчик",
          },
        },
        next: {
          type: NextType.REDIRECT_EXTERNAL,
          link: "https://www.instagram.com/p/CaxWVEuolcG/?utm_medium=copy_link",
        },
      },
    ],
  },
  ["belarus-non-belarusian-no-visa"]: {
    answers: [
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Где податься на визу?",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId:
            "https://spice-lillipilli-c0d.notion.site/6c8c275df8e84631b4d85c758dc7e274",
        },
      },
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Куда уехать без визы?",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId:
            "https://spice-lillipilli-c0d.notion.site/dec5dad695f24bc3b30f8d4b336992e6",
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
            text: "Да",
            icon: "✅",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "cfaef489ed1a406f8ae23a9520a982fd",
        },
      },
      {
        answer: {
          type: AnswerType.COMMON_SELECT,
          config: {
            text: "Нет",
            icon: "⛔️",
          },
        },
        next: {
          type: NextType.QUESTION,
          questionId: "belarus-non-belarusian-no-visa",
        },
      },
    ],
  },
  ["belarus-run-from"]: {
    question: {
      text: "Вы выездной/ая?",
    },
    answers: [
      {
        answer: {
          type: AnswerType.COMMON_SELECT,
          config: {
            text: "Да",
            icon: "✅",
          },
        },
        next: {
          type: NextType.QUESTION,
          questionId: "belarus-can-gone",
        },
      },
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Проверить выездной ли я",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "https://t.me/bysol_evacuation",
        },
      },
    ],
  },
  ["belarus-can-gone"]: {
    question: {
      text: "Eсть виза стран Шенгена?",
    },
    answers: [
      {
        answer: {
          type: AnswerType.COMMON_SELECT,
          config: {
            text: "Да",
            icon: "✅",
          },
        },
        next: {
          type: NextType.QUESTION,
          questionId: "belarus-can-gone-shengen-has-visa",
        },
      },
      {
        answer: {
          type: AnswerType.COMMON_SELECT,
          config: {
            text: "Нет",
            icon: "⛔️",
          },
        },
        next: {
          type: NextType.QUESTION,
          questionId: "belarus-can-gone-no-shengen-has-visa",
        },
      },
    ],
  },
  ["belarus-can-gone-shengen-has-visa"]: {
    answers: [
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Узнать про выезд в Литву и Польшу через Калининград (РФ)",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "cfaef489ed1a406f8ae23a9520a982fd",
        },
      },
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Общая информация о выезде",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "cfaef489ed1a406f8ae23a9520a982fd",
        },
      },
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Помощь с оформлением трудового договора в Польше",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "e9497f4f7e6c4d599e1873fa28d700f1",
        },
      },
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "ПЦР-тесты в Беларуси",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "65ec95a2b2494e45947fffce48bac04c",
        },
      },
    ],
  },
  ["belarus-can-gone-no-shengen-has-visa"]: {
    answers: [
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Где податься на визу",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "6c8c275df8e84631b4d85c758dc7e274",
        },
      },
      {
        answer: {
          type: AnswerType.ARTICLE_PREVIEW,
          config: {
            text: "Куда уехать без визы",
          },
        },
        next: {
          type: NextType.REDIRECT,
          postId: "dec5dad695f24bc3b30f8d4b336992e6",
        },
      },
    ],
  },
};
