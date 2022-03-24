import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Link } from "@nextui-org/react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { flowConfig } from "../../../shared/config";
import { answerMap, questionMap } from "../../../shared/components";
import { FlowConfig, NextConfig, NextType } from "../../../shared/questions";
import { CommonQuestion } from "../../questions/CommonQuestion";
import { route } from "next/dist/server/router";

const getIsValidInitSteps = (
  config?: FlowConfig,
  slug?: string[] | string
): boolean => {
  const keys = Object.keys(config?.questions || {});
  return (Array.isArray(slug) && slug?.every((e) => keys.includes(e))) ?? false;
};

export const FlowEngine = ({ config = flowConfig, setNext, next }) => {
  const router = useRouter();

  const [step, setStep] = useState<string[] | undefined>([]);

  const lastStep: string = step[step.length - 1] ?? "root";
  const { question, answers } = config.questions[lastStep];
  const QuestionComponent = questionMap[question?.type] ?? CommonQuestion;

  useEffect(() => {
    if (router.isReady) {
      if (getIsValidInitSteps(config, router?.query?.slug)) {
        setStep((router.query.slug as []) ?? []);
      } else if (router.query?.slug?.length) {
        router.push("/");
      }
    }
  }, [router.isReady]);

  const onAnswerSelect = (next: NextConfig) => () => {
    if (next.type === NextType.REDIRECT) {
      return router.push(`/post/${next.postId}`);
    } else if (next.type === NextType.QUESTION) {
      const nextSlugs = [
        ...((router.query.slug as any[]) || []),
        next.questionId,
      ].join("/");
      router.push("/flow/".concat(nextSlugs));
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
    const nextSlugs = [...((router.query.slug as any[]) || [])];
    nextSlugs.pop();
    router.push(nextSlugs.length ? "/flow/".concat(nextSlugs.join("/")) : "/");
    result.pop();
    setStep(result);
  };

  return (
    <div className="max-w-[700px] mx-auto px-4 sm:px-6 mt-7">
      <section className="relative mt-20 md:mt-30 pt-0 md:pt-10">
        {step.length > 0 && (
          <Link
            color="primary"
            onClick={onBackAnswer}
            className="flex items-center pl-4 pr-4 pt-2 pb-5 ml-[-15px]"
          >
            <ArrowLeftIcon className="h-5 mr-3" />
            Назад
          </Link>
        )}
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
      </section>
    </div>
  );
};
