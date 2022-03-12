import React from "react";
import Image from "next/image";
import { Card } from "@nextui-org/react";

export const CountrySelect = ({ text, flag, onSelect }) => {
  return (
    <Card
      hoverable
      clickable
      bordered
      css={{ mb: "20px" }}
      onClick={onSelect}
      className="hover:bg-gray-200 shadow hover:shadow"
    >
      <div className="flex items-center w-full">
        <div
          className="flex justify-center items-center rounded-full shadow flex-shrink-0 mr-3 overflow-hidden"
          style={{
            border: `2px solid #f4f4f4`,
          }}
        >
          <Image src={`/flags/${flag}.png`} width="60px" height="60px" />
        </div>
        <div className="text-center w-full">
          <div className="font-bold leading-snug tracking-tight mb-1">
            {text}
          </div>
        </div>
      </div>
    </Card>
  );
};
