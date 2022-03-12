import React from "react";
import { Text } from "@nextui-org/react";

export const RootQuestion = () => {
  return (
    <div className="text-center">
      <Text
        css={{
          textGradient: "45deg, $blue500 -20%, $pink500 50%",
        }}
        weight="bold"
        className="text-2xl md:text-5xl"
      >
        👋 Гайд Помощи
      </Text>
      <p className="text-xl text-gray-600 mb-8">
        Чтобы получить ответ на свой вопрос, пройдите простой опросник:
      </p>
    </div>
  );
};
