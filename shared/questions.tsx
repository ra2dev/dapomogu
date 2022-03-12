export enum QuestionType {
  ROOT = "root",
  DEFAULT = "default",
}

export enum AnswerType {
  HELP_SELECT = "HelpSelect",
  COUNTRY_SELECT = "CountrySelect",
  COMMON_SELECT = "CommonSelect",
  ARTICLE_PREVIEW = "ArticlePreview",
}

export enum NextType {
  REDIRECT = "redirect",
  QUESTION = "question",
}

export type NextConfig =
  | {
      type: NextType.REDIRECT;
      postId: string;
    }
  | {
      type: NextType.QUESTION;
      questionId: string;
    };

export type AnswerConfig = {
  answer: {
    type: AnswerType;
    config: any;
  };
  next: NextConfig;
};

export type QuestionItemConfig = {
  question?: {
    type?: QuestionType;
    text?: string;
    config?: any;
  };
  answers: AnswerConfig[];
};

export type FlowConfig = {
  questions: {
    [question: string]: QuestionItemConfig;
  };
};


