import { create } from "zustand";
import { IPost } from "@/app/types/post";

interface IPostState {
  posts: IPost[];
  setPosts: (newPosts: IPost[]) => void;
  addPost: (newPost: IPost) => void;
}

export const usePostsStore = create<IPostState>((set) => ({
  posts: [],
  setPosts: (newPosts: IPost[]) => set({ posts: newPosts }),
  addPost: (newPost: IPost) =>
    set((state) => ({ posts: [newPost, ...state.posts] })),
}));
