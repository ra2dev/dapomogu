import { FlowConfig, NextType } from "./questions";
import cloneDeep from "lodash/cloneDeep";
import { byBranch } from "./variations/byBranch";
import { ruBranch } from "./variations/ruBranch";
import { uaBranch } from "./variations/uaBranch";
import { baseBranch } from "./variations/baseBranch";
import { canHelpBranch } from "./variations/canHelpBranch";
import { euBranch } from "./variations/euBranch";
import { geBranch } from "./variations/geBranch";
import { trBranch } from "./variations/trBranch";

const config: FlowConfig = {
  questions: {
    ...baseBranch,
    ...canHelpBranch,
    ...uaBranch,
    ...euBranch,
    ...byBranch,
    ...ruBranch,
    ...geBranch,
    ...trBranch,
  },
};

const normalizeConfig = (conf: FlowConfig): FlowConfig => {
  const result = cloneDeep(conf);
  let items = Object.keys(result.questions).map((k) => result.questions[k]);
  const idList = Object.keys(result.questions);

  let item = items.pop();

  while (item) {
    item.answers.map((e) => {
      if (e?.next?.type === NextType.QUESTION && e?.next?.question) {
        const question = e?.next?.question;
        const key = question.slug;

        if (process.env.NODE_ENV === "development") {
          if (!key) {
            throw new Error(`Missing key ${key}`);
          } else if (idList.includes(key)) {
            throw new Error(`Key already exists, ${key}`);
          }
        }

        idList.push(key);
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
