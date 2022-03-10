export default {
  root: true,
  answers: [
    {
      answerType: "HelpSelect",
      answerConfig: {
        icon: "🆘",
        title: "Мне нужна помощь",
        description: "Найти как добраться в страну следования.",
        className: "bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]",
      },
      question: {
        answers: [
          {
            answerType: "HelpSelect",
            answerConfig: {
              icon: "🆘",
              title: "Мне нужна помощь",
              description: "Найти как добраться в страну следования.",
              className:
                "bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]",
            },
            resultType: "redirect",
          },
        ],
      },
    },
    {
      answerType: "HelpSelect",
      answerConfig: {
        icon: "🤝",
        title: "Я могу помочь",
        description: "Я хочу помочь людям пострадавших от войны.",
        className: "bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]",
      },
      question: null,
    },
  ],
};
