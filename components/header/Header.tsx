import React, { useState, useEffect } from "react";
import { Link, Text } from "@nextui-org/react";
import { SearchIcon } from "@heroicons/react/outline";
import { SearchBox } from "../search/SearchBox";
import { HeaderDropdown } from "./HeaderDropdown";
import { Logo } from "../Logo";

function Header() {
  const [top, setTop] = useState(true);

  const [open, setOpen] = useState(false);
  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <>
      <SearchBox open={open} setOpen={setOpen} />
      <header
        className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
          !top && "bg-white backdrop-blur-sm shadow-lg"
        }`}
        style={{
          borderBottom: "1px solid #D0D0D0",
          zIndex: 220,
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="md:block">
              <Link href="/">
                <Logo className="h-4 md:h-7" />
              </Link>
            </div>
            <div className="flex-shrink-0 mr-4 cursor-pointer">
              <div>
                <div className="flex hidden md:flex">
                  <Link href="/flow/need-help-select-country">
                    <Text size={16} className="text-[10px] md:text-[16px]">
                      Мне нужна помошь
                    </Text>
                  </Link>
                  <Link href="/flow/can-help">
                    <Text
                      size={16}
                      className="ml-10 text-[10px] md:text-[16px]"
                    >
                      Я хочу помочь
                    </Text>
                  </Link>
                </div>
              </div>
            </div>
            <nav className="flex">
              <div className="ml-auto flex items-center">
                <div className="mr-2 underline">
                  <HeaderDropdown />
                </div>
                <button
                  className="border border-gray-200 pl-4 pr-4 h-9 bg-gray-100 rounded-md flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
                  onClick={() => setOpen(true)}
                >
                  <SearchIcon height="20px" className="mr-0 md:mr-4" />{" "}
                  <div className="hidden md:flex">Поиск ...</div>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
