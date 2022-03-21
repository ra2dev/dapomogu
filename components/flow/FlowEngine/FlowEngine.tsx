import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Link } from "@nextui-org/react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { flowConfig } from "../../../shared/config";
import { answerMap, questionMap } from "../../../shared/components";
import { NextConfig, NextType } from "../../../shared/questions";
import { CommonQuestion } from "../../questions/CommonQuestion";

export const FlowEngine = ({ config = flowConfig, setNext, next }) => {
  const [step, setStep] = useState<string[] | undefined>([]);
  const router = useRouter();
  const lastStep: string = step[step.length - 1] ?? "root";
  const { question, answers } = config.questions[lastStep];

  const QuestionComponent = questionMap[question?.type] ?? CommonQuestion;

  const onAnswerSelect = (next: NextConfig) => () => {
    if (next.type === NextType.REDIRECT) {
      return router.push(`/post/${next.postId}`);
    } else if (next.type === NextType.QUESTION) {
      setStep([...(step || []), next.questionId]);
    } else if (next.type === NextType.REDIRECT_EXTERNAL) {
      window.open(next.link, "_blank");
    }
  };

  useEffect(() => {
    if (step.length > 0) {
      if (!next) {
        setNext(true);
      }
    } else if (next) {
      setNext(false);
    }
  }, [step, next]);

  const onBackAnswer = () => {
    const result = [...step];
    result.pop();
    setStep(result);
  };

  return (
    <div className="max-w-[700px] mx-auto px-4 sm:px-6 mt-7">
      <section className="relative mt-20 md:mt-30 pt-10">
        {question && (
          <QuestionComponent text={question.text} {...question.config} />
        )}
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
          <Link
            color="primary"
            onClick={onBackAnswer}
            className="flex items-center pl-4 pr-4 pt-2 pb-2"
          >
            <ArrowLeftIcon className="h-5 mr-3" />
            Назад
          </Link>
        )}
        {!next && (
          <>
            <div className="text-sm text-gray-600 mb-8 text-center">
              ❗️ВКЛЮЧИТЕ VPN И ВСЕГДА ИМЕЙТЕ ДОСТУП К САЙТУ❗️
            </div>
          </>
        )}
      </section>
    </div>
  );
};
