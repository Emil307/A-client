import { Button } from "@chakra-ui/react";
import React from "react";

export const PostForm = () => {
  return (
    <div className="flex flex-col items-end w-full h-fit p-4 border-b-sm border-borderColor">
      <div className="w-full flex gap-2 items-center">
        <div className="flex items-center justify-center w-11 h-11">
          <div className="w-10 h-10 rounded-full bg-orange-800"></div>
        </div>
        <input
          className="w-full text-xl py-3 caret-textGray"
          placeholder="What is happening?!"
          type="text"
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
