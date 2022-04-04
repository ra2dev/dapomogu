import React from "react";
import cn from "classnames";
import { Card } from "@nextui-org/react";
import * as Icons from "../icons/Icon";

export const SelectButton = ({
  text,
  icon,
  description,
  className,
  onSelect,
  iconType,
  iconClassName,
}) => {
  const ResultIcon = Icons[iconType];
  return (
    <Card
      clickable
      bordered
      css={{ mb: "20px" }}
      onClick={onSelect}
      className={cn("hover:bg-gray-200 shadow-none hover:shadow focus:border-[#DE3663]", className)}
    >
      <div className="flex items-center w-full bg-raty h-20 md:h-25">
        <div className="text-left w-full">
          <div className="font-bold leading-snug tracking-tight mb-1 text-xl">
            {text}
          </div>
          <div className="text-gray-600 text-md">{description}</div>
        </div>

        {ResultIcon ? (
          <span className={iconClassName}>
            <ResultIcon />
          </span>
        ) : (
          <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 mr-3">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};
