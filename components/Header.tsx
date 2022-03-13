import React, { useState, useEffect } from "react";
import { Button, Link, Text } from "@nextui-org/react";
import { ArrowLeftIcon, SearchIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { SearchBox } from "./search/SearchBox";

function Header({ showBackBtn }: { showBackBtn?: boolean }) {
  const [top, setTop] = useState(true);

  const [open, setOpen] = useState(false);
  const router = useRouter();
  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const onBack = () => router.back();
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
            {/* Site branding */}
            <div className="flex-shrink-0 mr-4 cursor-pointer">
              {/* Logo */}
              {showBackBtn ? (
                <Link
                  color="primary"
                  onClick={onBack}
                  className="flex items-center pl-4 pr-4 pt-2 pb-2"
                >
                  <ArrowLeftIcon className="h-5 mr-3" />
                  Назад
                </Link>
              ) : (
                <Text
                  h2
                  size={30}
                  weight="bold"
                  className="underline cursor-pointer"
                >
                  RSFY
                </Text>
              )}
            </div>

            {/* Site navigation */}
            <nav className="flex flex-grow">
              <div className="ml-auto">
                <button
                  className="pl-4 pr-4 h-9 bg-gray-200 rounded-lg flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
                  onClick={() => setOpen(true)}
                >
                  Поиск <SearchIcon height="20px" className="ml-4" />
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
