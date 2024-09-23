"use client";

import React, { useEffect } from "react";
import { PostCard } from "@/app/ui/home/PostCard";
import { Loader } from "@/app/ui/shared/Loader";
import { getPosts } from "@/app/api/posts";
import { Virtuoso } from "react-virtuoso";
import { usePostsStore } from "@/app/store/posts";

export const PostList: React.FC = () => {
  const posts = usePostsStore((post) => post.posts);
  const setPosts = usePostsStore((post) => post.setPosts);

  useEffect(() => {
    if (posts.length === 0) {
      getPosts(0, 50)
        .then((res) => {
          setPosts(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  function loadMore() {
    getPosts(posts.length, 50)
      .then((res) => {
        setPosts([...posts, ...res]);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="w-full h-5/6 overflow-y-auto">
      <Virtuoso
        data={posts}
        endReached={loadMore}
        increaseViewportBy={200}
        itemContent={(index, post) => {
          return <PostCard post={post} key={post.id} />;
        }}
        components={{ Footer }}
      />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex w-full h-16 items-center justify-center">
      <Loader />
    </div>
  );
};
