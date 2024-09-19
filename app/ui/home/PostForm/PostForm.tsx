"use client";

import React from "react";
import { Button } from "@chakra-ui/react";
import TextareaAutosize from "react-textarea-autosize";
import { createPost } from "@/app/api/posts";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostsStore } from "@/app/store/posts";

interface IFormFileds {
  text: string;
}

interface IPostFormProps {
  predecessorId?: number;
}

export const PostForm: React.FC<IPostFormProps> = ({ predecessorId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IFormFileds>();

  const addPost = usePostsStore((post) => post.addPost);

  const onSubmit: SubmitHandler<IFormFileds> = async (data) => {
    await createPost(data.text, predecessorId)
      .then((res) => {
        reset();
        addPost(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-end w-full h-fit p-4"
    >
      <div className="w-full flex gap-2">
        <div className="flex items-center justify-center w-11 h-11 mt-1">
          <div className="w-10 h-10 rounded-full bg-orange-800"></div>
        </div>
        <TextareaAutosize
          {...register("text", {
            required: "Обязательное поле",
          })}
          placeholder="What is happening?!"
          className="w-full h-full resize-none text-xl py-3 caret-textGray overflow-hidden"
        />
      </div>
      <Button
        paddingX={"2rem"}
        size={"lg"}
        fontSize={"1rem"}
        fontWeight={"bold"}
        rounded={"full"}
        color={"white"}
        colorScheme="blue"
        isLoading={isSubmitting}
        type="submit"
      >
        Post
      </Button>
    </form>
  );
};
