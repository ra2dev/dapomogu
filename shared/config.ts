import { FlowConfig, NextType } from "./questions";
import cloneDeep from "lodash/cloneDeep";
import { byBranch } from "./variations/byBranch";
import { ruBranch } from "./variations/ruBranch";
import { uaBranch } from "./variations/uaBranch";
import { baseBranch } from "./variations/baseBranch";
import { canHelpBranch } from "./variations/canHelpBranch";
import { euBranch } from "./variations/euBranch";
import { geBranch } from "./variations/geBranch";

const config: FlowConfig = {
  questions: {
    ...baseBranch,
    ...canHelpBranch,
    ...uaBranch,
    ...euBranch,
    ...byBranch,
    ...ruBranch,
    ...geBranch,
  },
};

const normalizeConfig = (conf: FlowConfig): FlowConfig => {
  const result = cloneDeep(conf);
  let items = Object.keys(result.questions).map((k) => result.questions[k]);
  let item = items.pop();

  while (item) {
    item.answers.map((e) => {
      if (e?.next?.type === NextType.QUESTION && e?.next?.question) {
        const question = e?.next?.question;
        const key = JSON.stringify(question);
        e.next.questionId = key;
        items.push(question);
        result.questions[key] = question;
      }
    });
    item = items.pop();
  }
  return result;
};

export const flowConfig = normalizeConfig(config);

console.log(flowConfig.questions.root);
