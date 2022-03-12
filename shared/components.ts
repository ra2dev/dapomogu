import { AnswerType, QuestionType } from "./questions";
import { SelectButton } from "../components/answers/SelectButton";
import { RootQuestion } from "../components/questions/RootQuestion";
import { CountrySelect } from "../components/answers/CountrySelect";
import { PreviewSelect } from "../components/answers/PreviewSelect";

export type AnswerMap = {
  [key in AnswerType]: any;
};

export const answerMap: AnswerMap = {
  [AnswerType.HELP_SELECT]: SelectButton,
  [AnswerType.COMMON_SELECT]: SelectButton,
  [AnswerType.ARTICLE_PREVIEW]: PreviewSelect,
  [AnswerType.COUNTRY_SELECT]: CountrySelect,
};

export type QuestionMap = {
  [key in QuestionType]: any;
};

export const questionMap: QuestionMap = {
  [QuestionType.ROOT]: RootQuestion,
  [QuestionType.DEFAULT]: SelectButton,
};

export type AnswerControls = {
  onSelect: () => {};
};
