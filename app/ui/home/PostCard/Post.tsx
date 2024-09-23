import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IPost } from "@/app/types/post";
import { ReplyPopup } from "@/app/ui/home/ReplyPopup";
import { useDisclosure } from "@chakra-ui/react";
import { getUser } from "@/app/api/users";
import { IUser } from "@/app/types/user";

interface IPostCard {
  post: IPost;
}

export const PostCard: React.FC<IPostCard> = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [predecessorOwner, setPredecessorOwner] = useState<IUser | null>(null);

  useEffect(() => {
    if (post.predecessor) {
      getUser(post.predecessor.ownerId)
        .then((res) => {
          setPredecessorOwner(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  return (
    <>
      <div className="w-full flex flex-col gap-2 px-4 py-3 border-t-sm border-borderColor">
        <div>
          <div className="flex gap-2">
            <div className="flex items-center justify-center w-11 h-11">
              <Image
                src="/assets/icons/user.svg"
                priority
                width={40}
                height={40}
                className="min-w-10 min-h-10"
                alt="user"
              />
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
        {post.predecessor && predecessorOwner && (
          <div className="p-3 rounded-md border-sm border-borderColor">
            <div className="flex gap-2">
              <div className="flex items-center justify-center w-11 h-11">
                <Image
                  src="/assets/icons/user.svg"
                  priority
                  width={40}
                  height={40}
                  alt="user"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <h1 className="font-bold text-textWhite">
                    {predecessorOwner?.name}
                  </h1>
                  <span className="text-textGray">
                    {predecessorOwner?.tag} ·{" "}
                    {new Date(post.createdAt).toLocaleDateString("en-us", {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <p className="w-full break-all">{post.predecessor.body}</p>
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
        )}
      </div>
      <ReplyPopup predecessorId={post.id} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
