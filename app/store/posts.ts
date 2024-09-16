import { create } from "zustand";
import { IPost } from "@/app/types/post";

interface IPostState {
  posts: IPost[];
  setPosts: (posts: IPost[]) => void;
}

export const usePostsStore = create<IPostState>((set) => ({
  posts: [],
  setPosts: (newPosts: IPost[]) => set({ posts: newPosts }),
}));
