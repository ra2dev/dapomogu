import { useState } from "react";
import { useRouter } from "next/router";
import { flowConfig } from "../../../shared/config";
import { answerMap, questionMap } from "../../../shared/components";
import { NextConfig, NextType } from "../../../shared/questions";
import { CommonQuestion } from "../../questions/CommonQuestion";
import { Button } from "@nextui-org/react";
import { ArrowLeftIcon } from "@heroicons/react/outline";

export const FlowEngine = ({ config = flowConfig }) => {
  const [step, setStep] = useState<string[] | undefined>([]);
  const router = useRouter();
  const lastStep: string = step[step.length - 1] ?? "root";
  const { question, answers } = config.questions[lastStep];

  const QuestionComponent = questionMap[question.type] ?? CommonQuestion;

  const onAnswerSelect = (next: NextConfig) => () => {
    if (next.type === NextType.REDIRECT) {
      alert(`Redirect: /post/${next.postId}`);
      // return router.push(`/post/${next.postId}`);
    } else if (next.type === NextType.QUESTION) {
      setStep([...(step || []), next.questionId]);
    }
  };

  const onBackAnswer = () => {
    const result = [...step];
    result.pop();
    setStep(result);
  };
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-7">
      <section className="relative mt-20 md:mt-30 pt-10">
        <QuestionComponent text={question.text} {...question.config} />
        {answers?.map(({ answer, next }, i) => {
          const AnswerComponent = answerMap[answer.type];

          return (
            <AnswerComponent
              key={i.toString().concat(answer.type)}
              onSelect={onAnswerSelect(next)}
              {...answer.config}
            />
          );
        })}
        {step.length > 0 && (
          <Button color="primary" size="lg" auto ghost onClick={onBackAnswer}>
            <ArrowLeftIcon className="h-5 mr-3" />
            Назад
          </Button>
        )}
      </section>
    </div>
  );
};
