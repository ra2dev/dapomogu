import React from "react";
import cn from "classnames";
import { Card } from "@nextui-org/react";

export const SelectButton = ({
  text,
  icon,
  description,
  className,
  onSelect,
}) => {
  return (
    <Card
      clickable
      bordered
      css={{ mb: "20px" }}
      onClick={onSelect}
      className={cn("hover:bg-gray-200 shadow-none hover:shadow", className)}
    >
      <div className="flex items-center w-full bg-raty h-20 md:h-25">
        <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 mr-3">
          {icon}
        </div>
        <div className="text-center w-full">
          <div className="font-bold leading-snug tracking-tight mb-1">
            {text}
          </div>
          <div className="text-gray-600">{description}</div>
        </div>
      </div>
    </Card>
  );
};
