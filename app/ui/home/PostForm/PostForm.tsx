"use client";

import React from "react";
import { Button } from "@chakra-ui/react";
import TextareaAutosize from "react-textarea-autosize";

export const PostForm = () => {
  return (
    <div className="flex flex-col items-end w-full h-fit p-4 border-b-sm border-borderColor">
      <div className="w-full flex gap-2">
        <div className="flex items-center justify-center w-11 h-11 mt-1">
          <div className="w-10 h-10 rounded-full bg-orange-800"></div>
        </div>
        <TextareaAutosize
          placeholder="What is happening?!"
          className="w-full h-full h-24 resize-none text-xl py-3 caret-textGray overflow-hidden"
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
      >
        Post
      </Button>
    </div>
  );
};
