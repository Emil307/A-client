import React from "react";
import { IPost } from "@/app/types/post";

interface IPostCard {
  post: IPost;
}

export const PostCard: React.FC<IPostCard> = ({ post }) => {
  return (
    <div className="flex flex-col gap-2 px-4 py-3 border-b-sm border-borderColor">
      <div>
        <div className="flex gap-2">
          <div className="flex items-center justify-center w-11 h-11">
            <div className="w-10 h-10 rounded-full bg-orange-800"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <h1 className="font-bold text-textWhite">{post.author}</h1>
              <span className="text-textGray">
                {post.tag} · {post.created}
              </span>
            </div>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
