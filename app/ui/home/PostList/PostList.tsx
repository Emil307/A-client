"use client";

import React, { useEffect, useState } from "react";
import { PostCard } from "@/app/ui/home/PostCard";
import { usePostsStore } from "@/app/store/posts";
import { getPosts } from "@/app/api/posts";

export const PostList: React.FC = () => {
  const posts = usePostsStore((post) => post.posts);
  const setPosts = usePostsStore((post) => post.setPosts);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleGetPosts();
  }, []);

  async function handleGetPosts() {
    setIsLoading(true);

    getPosts()
      .then((res) => {
        setPosts(res);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="h-5/6 overflow-y-auto">
      {isLoading && <>Loading...</>}
      {posts && posts.map((post) => <PostCard post={post} key={post.id} />)}
    </div>
  );
};
