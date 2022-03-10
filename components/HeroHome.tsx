import React, { useState } from "react";

import HeroImage from "../images/hero-image.png";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="sm:pt-20 pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-3xl xs xs:text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r  from-blue-400 to-blue-300">
                👋 Гайд Помощи
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Чтобы получить ответ на свой вопрос, пройдите простой опросник:
              </p>

              <div className="transform hover:scale-[1.01] transition-all rounded-xl w-full bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] mb-2">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg`}
                  href="#0"
                >
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 mr-3">
                    🆘
                  </div>
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Мне нужна помощь
                    </div>
                    <div className="text-gray-600">
                      Найти как добраться в страну следования, какие документы
                      необходимо и дописать текст тут
                    </div>
                  </div>
                </a>
              </div>
              <div className="transform hover:scale-[1.01] transition-all rounded-xl w-full bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg`}
                  href="#0"
                >
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 mr-3">
                    🤝
                  </div>
                  <div className="text-center w-full">
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Я могу помочь
                    </div>
                    <div className="text-gray-600">
                      Я хочу помочь Армии и Народу пострадавших от войны.
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Hero image */}
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
