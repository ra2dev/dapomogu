import { Card } from "@nextui-org/react";
import cn from "classnames";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";

export const PreviewSelect = ({ text, description, className, onSelect }) => {
  return (
    <Card
      clickable
      bordered
      onClick={onSelect}
      className={cn("hover:bg-gray-200 shadow hover:shadow mb-4", className)}
    >
      <div className="flex items-center w-full bg-raty">
        <div className="w-full">
          <div className="font-bold leading-snug tracking-tight mb-1">
            {text}
          </div>
          <div className="text-gray-600">{description}</div>
        </div>
      </div>
      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0  ml-auto">
        <ArrowRightIcon height="20px" />
      </div>
    </Card>
  );
};
