import { AnswerType, FlowConfig, NextType } from "../questions";

export const euBranch: FlowConfig["questions"] = {
  ["eu-select"]: {
    question: {
      text: "Страны ЕС",
    },
    answers: [
      {
        answer: {
          type: AnswerType.COMMON_SELECT,
          config: {
            text: "Польша",
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
                    text: "Поиск Работы",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "631e8eb12b374f47b773aa2805601bed",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Поиск Учебы",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "7e2c0f8c22694c72afe912753a1dab24",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Социальная жизнь",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "d78fc0bb30c24f1aac94075aab110c87",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Легализация",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "b130d448a69d4542bcfa29912894d5ed",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Поиск Жилья Платно",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "edab10075da24c1a931e80486d3d4840",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Поиск Жилья Бесплатно",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "1fee6e7afd12464ebdd9e82decf44d90",
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
            text: "Германия",
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
                    text: "Поиск работы/учёбы",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "94976749fdf34fe5bca5b71d815b9f29",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Cоциальная жизнь/легализация",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "89423181f7874b5b83de2d02523404f0",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Поиск жилья бесплатно",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "1fee6e7afd12464ebdd9e82decf44d90",
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
            text: "Швеция",
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
                    text: "Социальная Жизнь и Легализация",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "2397437ea4234321b976b7f0a8639134",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Поиск Жилья Бесплатно",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "1fee6e7afd12464ebdd9e82decf44d90",
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
            text: "Венгрия",
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
                    text: "Социальная Жизнь и Легализация",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "2f94130cde10421dac4106ff494e3bc1",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Поиск Жилья Бесплатно",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "1fee6e7afd12464ebdd9e82decf44d90",
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
            text: "Нидерланды",
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
                    text: "Социальная Жизнь и Легализация",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "a6d83b13b8bc447caffbfc00483a3b73",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Поиск Жилья Бесплатно",
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
                    text: "Работа",
                  },
                },
                next: {
                  type: NextType.REDIRECT_EXTERNAL,
                  link: "https://www.instagram.com/p/Ca2eq0xtrJ9/?utm_medium=copy_link",
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
            text: "Литва",
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
                    text: "Социальная Жизнь и Легализация",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "fc1d916651d0473b9820f392ad7e889f",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Поиск Жилья Бесплатно",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "1fee6e7afd12464ebdd9e82decf44d90",
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
            text: "Латвия",
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
                    text: "Ковид Меры",
                  },
                },
                next: {
                  type: NextType.REDIRECT_EXTERNAL,
                  link: "https://reopen.europa.eu/en/map/DEU/6001",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Поиск Жилья Бесплатно",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "1fee6e7afd12464ebdd9e82decf44d90",
                },
              },
            ],
          },
        },
      },
    ],
  },
};
