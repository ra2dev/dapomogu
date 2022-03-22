import { AnswerType, FlowConfig, NextType, QuestionType } from "./questions";

const ruBranch: FlowConfig["questions"] = {
  ["rus-rights-select"]: {
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
  ["rus-run-select"]: {
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
          postId: "https://vbanke.info/news/otkrytye-dlya-rossiyan-strany.html",
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
          questionId: "rus-rights-select",
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
          questionId: "rus-run-select",
        },
      },
    ],
  },
};

const byBranch: FlowConfig["questions"] = {
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

export const flowConfig: FlowConfig = {
  questions: {
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
    ...byBranch,
    ...ruBranch,
  },
};
