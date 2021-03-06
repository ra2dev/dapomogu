import { AnswerType, FlowConfig, NextType } from "../questions";

export const euBranch: FlowConfig["questions"] = {
  ["eu-select"]: {
    question: {
      text: "Страны ЕС",
    },
    answers: [
      {
        answer: {
          type: AnswerType.COUNTRY_SELECT,
          config: {
            text: "Польша",
            flag: "poland",
          },
        },
        next: {
          type: NextType.QUESTION,
          question: {
            slug: "eu-poland-need-help",
            answers: [
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
            ],
          },
        },
      },
      {
        answer: {
          type: AnswerType.COUNTRY_SELECT,
          config: {
            text: "Германия",
            flag: "german",
          },
        },
        next: {
          type: NextType.QUESTION,
          question: {
            slug: "eu-german-need-help",
            answers: [
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Поиск жилья Бесплатно",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "5955f7ec52c441f0adbdddd9e3f373a6",
                },
              },
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Поиск жилья Платно",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "33b2d9c1c1d8413893b73027adc3cfde",
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
                    text: "Поиск работы/учёбы",
                  },
                },
                next: {
                  type: NextType.REDIRECT,
                  postId: "94976749fdf34fe5bca5b71d815b9f29",
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
            text: "Швеция",
            flag: "sweden",
          },
        },
        next: {
          type: NextType.QUESTION,
          question: {
            slug: "eu-sweden-need-help",
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
          type: AnswerType.COUNTRY_SELECT,
          config: {
            text: "Венгрия",
            flag: "hungary",
          },
        },
        next: {
          type: NextType.QUESTION,
          question: {
            slug: "eu-hungary-need-help",
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
          type: AnswerType.COUNTRY_SELECT,
          config: {
            text: "Нидерланды",
            flag: "nerthelends",
          },
        },
        next: {
          type: NextType.QUESTION,
          question: {
            slug: "eu-nerthelends-need-help",
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
          type: AnswerType.COUNTRY_SELECT,
          config: {
            text: "Литва",
            flag: "lithuania",
          },
        },
        next: {
          type: NextType.QUESTION,
          question: {
            slug: "eu-lithuania-need-help",
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
          type: AnswerType.COUNTRY_SELECT,
          config: {
            text: "Латвия",
            flag: "latvia",
          },
        },
        next: {
          type: NextType.QUESTION,
          question: {
            slug: "eu-latvia-need-help",
            answers: [
              {
                answer: {
                  type: AnswerType.ARTICLE_PREVIEW,
                  config: {
                    text: "Социальная жизнь/легализация",
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
