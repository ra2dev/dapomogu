import { AnswerType, FlowConfig, NextType, QuestionType } from "./questions";
import cloneDeep from "lodash/cloneDeep";
import { byBranch } from "./variations/byBranch";
import { ruBranch } from "./variations/ruBranch";
import { uaBranch } from "./variations/uaBranch";
import { baseBranch } from "./variations/baseBranch";

const config: FlowConfig = {
  questions: {
    ...baseBranch,
    ...uaBranch,
    ...byBranch,
    ...ruBranch,
  },
};

const normalizeConfig = (conf: FlowConfig): FlowConfig => {
  const result = cloneDeep(conf);
  //
  // let items = Object.keys(result);
  // let item = items.pop();
  // while (item) {
  //
  // }
  return result;
};

export const flowConfig = normalizeConfig(config);
