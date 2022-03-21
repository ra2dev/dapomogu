import React from "react";

export const BackgroundGradient = () => {
  return (
    <>
      <img
        src="/bg-gradient.svg"
        alt=""
        className="fixed bottom-0 left-0 w-100"
      />
      <img
        src="/dark-mode-gradient.svg"
        alt=""
        className="fixed top-0 right-0 w-100"
      />
    </>
  );
};
