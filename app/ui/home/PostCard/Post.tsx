import React from "react";
import Image from "next/image";
import { IPost } from "@/app/types/post";
import { ReplyPopup } from "@/app/ui/home/ReplyPopup";
import { useDisclosure } from "@chakra-ui/react";

interface IPostCard {
  post: IPost;
}

export const PostCard: React.FC<IPostCard> = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="w-full flex flex-col gap-2 px-4 py-3 border-t-sm border-borderColor">
        <div>
          <div className="flex gap-2">
            <div className="flex items-center justify-center w-11 h-11">
              <div className="w-10 h-10 rounded-full bg-orange-800"></div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <h1 className="font-bold text-textWhite">
                  {post?.owner?.name}
                </h1>
                <span className="text-textGray">
                  {post.owner?.tag} ·{" "}
                  {new Date(post.createdAt).toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <p className="w-full break-all">{post.body}</p>
              <button onClick={onOpen}>
                <Image
                  src="/assets/icons/reply.svg"
                  priority
                  width={24}
                  height={24}
                  alt="reply"
                />
              </button>
            </div>
          </div>
        </div>
        {post.predecessor && (
          <div className="p-3 rounded-md border-sm border-borderColor">
            {post.predecessor.body}
          </div>
        )}
      </div>
      <ReplyPopup predecessorId={post.id} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
