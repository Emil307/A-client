import React from "react";
import { PostCard } from "@/app/ui/home/PostCard";

const posts = [
  {
    id: 1,
    author: "Alex Jones",
    tag: "@cb_doge",
    created: "17h",
    body: "Coverup of Trump Assassination Attempt Officially Collapses – Top Democrats Admit Secret Service Stood Down & The DHS/DOJ Are Involved In A Massive Coverup!",
  },
  {
    id: 2,
    author: "Alex Jones",
    tag: "@cb_doge",
    created: "17h",
    body: "Coverup of Trump Assassination Attempt Officially Collapses – Top Democrats Admit Secret Service Stood Down & The DHS/DOJ Are Involved In A Massive Coverup!",
  },
  {
    id: 3,
    author: "Alex Jones",
    tag: "@cb_doge",
    created: "17h",
    body: "Coverup of Trump Assassination Attempt Officially Collapses – Top Democrats Admit Secret Service Stood Down & The DHS/DOJ Are Involved In A Massive Coverup!",
  },
  {
    id: 4,
    author: "Alex Jones",
    tag: "@cb_doge",
    created: "17h",
    body: "Coverup of Trump Assassination Attempt Officially Collapses – Top Democrats Admit Secret Service Stood Down & The DHS/DOJ Are Involved In A Massive Coverup!",
  },
  {
    id: 5,
    author: "Alex Jones",
    tag: "@cb_doge",
    created: "17h",
    body: "Coverup of Trump Assassination Attempt Officially Collapses – Top Democrats Admit Secret Service Stood Down & The DHS/DOJ Are Involved In A Massive Coverup!",
  },
  {
    id: 6,
    author: "Alex Jones",
    tag: "@cb_doge",
    created: "17h",
    body: "Coverup of Trump Assassination Attempt Officially Collapses – Top Democrats Admit Secret Service Stood Down & The DHS/DOJ Are Involved In A Massive Coverup!",
  },
  {
    id: 7,
    author: "Alex Jones",
    tag: "@cb_doge",
    created: "17h",
    body: "Coverup of Trump Assassination Attempt Officially Collapses – Top Democrats Admit Secret Service Stood Down & The DHS/DOJ Are Involved In A Massive Coverup!",
  },
  {
    id: 8,
    author: "Alex Jones",
    tag: "@cb_doge",
    created: "17h",
    body: "Coverup of Trump Assassination Attempt Officially Collapses – Top Democrats Admit Secret Service Stood Down & The DHS/DOJ Are Involved In A Massive Coverup!",
  },
  {
    id: 9,
    author: "Alex Jones",
    tag: "@cb_doge",
    created: "17h",
    body: "Coverup of Trump Assassination Attempt Officially Collapses – Top Democrats Admit Secret Service Stood Down & The DHS/DOJ Are Involved In A Massive Coverup!",
  },
  {
    id: 10,
    author: "Alex Jones",
    tag: "@cb_doge",
    created: "17h",
    body: "Coverup of Trump Assassination Attempt Officially Collapses – Top Democrats Admit Secret Service Stood Down & The DHS/DOJ Are Involved In A Massive Coverup!",
  },
  {
    id: 11,
    author: "Alex Jones",
    tag: "@cb_doge",
    created: "17h",
    body: "Coverup of Trump Assassination Attempt Officially Collapses – Top Democrats Admit Secret Service Stood Down & The DHS/DOJ Are Involved In A Massive Coverup!",
  },
  {
    id: 12,
    author: "Alex Jones",
    tag: "@cb_doge",
    created: "17h",
    body: "Coverup of Trump Assassination Attempt Officially Collapses – Top Democrats Admit Secret Service Stood Down & The DHS/DOJ Are Involved In A Massive Coverup!",
  },
  {
    id: 13,
    author: "Alex Jones",
    tag: "@cb_doge",
    created: "17h",
    body: "Coverup of Trump Assassination Attempt Officially Collapses – Top Democrats Admit Secret Service Stood Down & The DHS/DOJ Are Involved In A Massive Coverup!",
  },
  {
    id: 14,
    author: "Alex Jones",
    tag: "@cb_doge",
    created: "17h",
    body: "Coverup of Trump Assassination Attempt Officially Collapses – Top Democrats Admit Secret Service Stood Down & The DHS/DOJ Are Involved In A Massive Coverup!",
  },
  {
    id: 15,
    author: "Alex Jones",
    tag: "@cb_doge",
    created: "17h",
    body: "Coverup of Trump Assassination Attempt Officially Collapses – Top Democrats Admit Secret Service Stood Down & The DHS/DOJ Are Involved In A Massive Coverup!",
  },
  {
    id: 16,
    author: "Alex Jones",
    tag: "@cb_doge",
    created: "17h",
    body: "Coverup of Trump Assassination Attempt Officially Collapses – Top Democrats Admit Secret Service Stood Down & The DHS/DOJ Are Involved In A Massive Coverup!",
  },
];

export const Postist: React.FC = () => {
  return (
    <div className="h-5/6 overflow-y-auto">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};
