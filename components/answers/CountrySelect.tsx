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
      className="hover:bg-gray-200 shadow hover:shadow flex items-center"
    >
      <div className="flex items-center w-full">
        <div className="text-left w-full">
          <div className="font-bold leading-snug tracking-tight mb-1 text-xl">
            {text}
          </div>
        </div>
        <div
          className="overflow-hidden rounded-xl block"
          style={{
            height: "50px",
            paddingTop: "8px",
          }}
        >
          <Image
            src={`/flag/${flag}.png`}
            width="67px"
            height="48px"
            priority={true}
            objectFit="fill"
          />
        </div>
      </div>
    </Card>
  );
};
