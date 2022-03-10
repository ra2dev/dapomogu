import React from "react";
import cn from "classnames";

export const SelectButton = ({ title, icon, description, className }) => {
  // bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]
  return (
    <div
      className={cn(
        "transform hover:scale-[1.01] active:scale-[1.02] transition-all rounded-xl w-full p-1 mb-2 cursor-pointer",
        className
      )}
    >
      <div
        className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg hover:bg-gray-200`}
      >
        <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 mr-3">
          {icon}
        </div>
        <div className="text-center w-full">
          <div className="font-bold leading-snug tracking-tight mb-1">
            {title}
          </div>
          <div className="text-gray-600">{description}</div>
        </div>
      </div>
    </div>
  );
};
