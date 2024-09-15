import React from "react";

export const PostForm = () => {
  return (
    <div className="w-full h-fit py-2 px-4 border-b-sm border-borderColor">
      <div className="flex gap-2 items-center">
        <div className="flex items-center justify-center w-11 h-11">
          <div className="w-10 h-10 rounded-full bg-orange-800"></div>
        </div>
        <input
          className="text-xl py-3 caret-textGray"
          placeholder="What is happening?!"
          type="text"
        />
      </div>
    </div>
  );
};
