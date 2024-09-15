import React from "react";

export const Post: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 px-4 py-3 border-b-sm border-borderColor">
      <div>
        <div className="flex gap-2">
          <div className="flex items-center justify-center w-11 h-11">
            <div className="w-10 h-10 rounded-full bg-orange-800"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <h1 className="font-bold text-textWhite">Alex Jones </h1>
              <span className="text-textGray">@cb_doge · 17h</span>
            </div>
            <p>
              Coverup of Trump Assassination Attempt Officially Collapses – Top
              Democrats Admit Secret Service Stood Down & The DHS/DOJ Are
              Involved In A Massive Coverup!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
