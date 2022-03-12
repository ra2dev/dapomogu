import React from "react";

export const CommonQuestion = ({ text }) => {
  return (
    <h1
      className="text-2xl xs xs:text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4"
      data-aos="zoom-y-out"
    >
      {text}
    </h1>
  );
};
