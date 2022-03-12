import React, { useState, useEffect } from "react";
import { Button, Text } from "@nextui-org/react";
import { SearchIcon } from "@heroicons/react/outline";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
      style={{
        borderBottom: "1px solid #D0D0D0",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4 cursor-pointer">
            {/* Logo */}
            <Text
              h2
              size={30}
              css={{
                textGradient: "45deg, $yellow500 -20%, $red500 100%",
                textDecoration: "underline",
              }}
              weight="bold"
              className="underline cursor-pointer"
            >
              UA Support
            </Text>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <div className="ml-auto">
              <button className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center hover:ring-2 ring-gray-300 transition-all">
                <SearchIcon height="20px" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
