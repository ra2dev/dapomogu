import React from "react";
import { Text } from "@nextui-org/react";

export const RootQuestion = () => {
  return (
    <div className="text-left pt-2 md:pt-7">
      <Text weight="bold" className="text-[27px] md:text-[36px] leading-10 mb-5">
        Как спастись от <br />
        <b className="text-[#DE3663]">«спецоперации в Украине»</b><br /> даже
        если вы не в Украине. И как помочь пострадавшим от неё
      </Text>
      <p className="text-md text-gray-600 mb-8 leading-6">
        Простой опросник приведёт вас к ответу. Мы обновляем информацию, но
        проверяйте её актуальность. Включите VPN и всегда имейте доступ к сайту!
      </p>
    </div>
  );
};
