import { Grid, Card, Text, Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import fetch from "node-fetch";
import cn from "classnames";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { TagsRender } from "../blog/TagsRender";

const CardInfo = ({ post }) => {
  return (
    <Link href={`/post/${post.id}`}>
      <Card
        clickable
        bordered
        className={cn("hover:bg-gray-200 shadow-none hover:shadow mb-4")}
      >
        <div className="flex items-center w-full bg-raty">
          <div className="w-full">
            <div className="font-bold leading-snug tracking-tight mb-1">
              {post.name}
            </div>
            <div className="text-gray-600">{post.description}</div>
          </div>
        </div>
        <div className="flex">
          <TagsRender tags={post.tags} />
          <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0  ml-auto">
            <ArrowRightIcon height="20px" />
          </div>
        </div>
      </Card>
    </Link>
  );
};

const MAX_SHOW_LENGTH = 10;

export const BlogList = () => {
  const [posts, setPosts] = useState([]);

  // const posts = Array(100).fill(0);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);
  useEffect(() => {
    fetch(`/api/search?query=fullquery`)
      .then((r) => r.json())
      .then((e) => {
        setPosts(e.result);
      });
  }, []);

  const hasMore = posts.length > MAX_SHOW_LENGTH;
  return posts.length > 0 ? (
    <div
      className="max-w-4xl mx-auto px-4 sm:px-6 pb-20"
      style={{ marginTop: "calc(100vh - 580px)" }}
    >
      <div className="mb-2">
        <div className="text-xl text-gray-600">Посты:</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 flex-wrap mb-4">
        {posts.slice(0, MAX_SHOW_LENGTH).map((e) => (
          <div className="w-full">
            <CardInfo post={e} />
          </div>
        ))}
        {showMore &&
          posts.slice(MAX_SHOW_LENGTH).map((e) => (
            <div className="w-full">
              <CardInfo post={e} />
            </div>
          ))}
      </div>
      {hasMore && (
        <Button ghost onClick={toggleShowMore}>
          {showMore ? "Скрыть" : "Показать Больше"}
        </Button>
      )}
    </div>
  ) : null;
};
