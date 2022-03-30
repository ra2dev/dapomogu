import React from "react";
import { Container } from "../components/container/Container";
import NextLink from "next/link";
import { Link } from "@nextui-org/react";
import { ArrowLeftIcon } from "@heroicons/react/outline";

export default function Main() {
  return (
    <Container hasOverlay title="404">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mt-[120px] p-5">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black">
          404
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          К сожалению - это неправильный адрес или такой страницы существует.
        </p>
        <NextLink href="/">
          <Link
            color="primary"
            className="flex items-center pl-6 pr-4 pt-2 pb-5 ml-[-15px]"
          >
            <ArrowLeftIcon className="h-5 mr-3" />
            Назад
          </Link>
        </NextLink>
      </div>
    </Container>
  );
}
