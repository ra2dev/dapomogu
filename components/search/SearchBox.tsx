import { Dialog, Combobox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import cn from "classnames";
import { useRouter } from "next/router";

export function SearchBox({ open, setOpen }: any) {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query) {
      fetch(`/api/search?query=${query}`)
        .then((r) => r.json())
        .then((e) => {
          setItems(e.result);
        });
    }
  }, [query]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        setOpen(!open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery("")}>
      <Dialog
        onClose={setOpen}
        className="fixed inset-0 pt-[25vh] md:pt-[25vh] z-[999] mx-2"
      >
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />
        </Transition.Child>
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            onChange={(value) => {
              router.push(`/post/${value}`);
              setOpen(false);
            }}
            value=""
            className="relative bg-white max-w-l md:max-w-3xl mx-auto rounded-xl shadow-2xl ring-1 ring-black/5 divide-y divide-gray-200"
          >
            <div className="flex items-center px-4 ">
              <SearchIcon className="h-6 w-6 text-gray-500" />
              <Combobox.Input
                name="customName"
                onChange={(event) => {
                  setQuery(event.target?.value);
                }}
                style={{ fontSize: "16px" }}
                className="w-full border-0 bg-transparent b-0 focus:ring-0 text-sm text-gray-800 placeholder-gray-400 h-12"
                placeholder="Search..."
              />
            </div>

            {items.length > 0 && (
              <Combobox.Options
                static
                className="py-4 text-sm max-h-96 overflow-auto"
              >
                {items.map((e) => {
                  return (
                    <Combobox.Option value={e.id}>
                      {({ active }) => (
                        <div
                          className={cn(
                            "px-4 py-2 space-x-1 cursor-pointer",
                            active ? "bg-purple-400" : "bg-transparent"
                          )}
                        >
                          <span
                            className={cn(
                              "font-medium",
                              active ? "text-white" : "text-gray-900"
                            )}
                          >
                            {e.name}
                          </span>
                        </div>
                      )}
                    </Combobox.Option>
                  );
                })}
              </Combobox.Options>
            )}
            {query && items.length === 0 && (
              <p className="p-4 text-sm text-gray-500">No Results Found</p>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
