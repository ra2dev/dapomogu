import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import Image from "next/image";

export const HeaderDropdown = () => {
  const items = [
    {
      link: "https://instagram.com/by.theway_?utm_medium=copy_link",
      text: (
        <div className="flex items-center">
          <Image src="/support/instagram.svg" height="24px" width="24px" />
          <div className="ml-2">@ksenia</div>
        </div>
      ),
    },
    // {
    //   link: "another",
    //   text: (
    //     <div className="flex items-center">
    //       <Image src="/support/telegram.svg" height="24px" width="24px" />
    //       <div className="ml-2">telegram</div>
    //     </div>
    //   ),
    // },
  ];
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Контакты
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((e) => (
              <Menu.Item key={e.link}>
                {({ active }) => (
                  <a
                    href={e.link}
                    target="_blank"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {e.text}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
