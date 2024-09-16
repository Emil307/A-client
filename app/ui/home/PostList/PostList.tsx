import React from "react";
import { PostCard } from "@/app/ui/home/PostCard";
import { IPost } from "@/app/types/post";

interface IPostList {
  posts: IPost[];
}

export const PostList: React.FC<IPostList> = ({ posts }) => {
  return (
    <div className="h-5/6 overflow-y-auto">
      {posts && posts.map((post) => <PostCard post={post} key={post.id} />)}
    </div>
  );
};
