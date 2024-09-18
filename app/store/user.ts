import { create } from "zustand";
import { IUser } from "@/app/types/user";

interface IUserState {
  user: IUser;
  setUser: (user: IUser) => void;
}

export const useUserStore = create<IUserState>((set) => ({
  user: {
    id: 0,
    name: "",
    tag: "",
    email: "",
    createdAt: new Date(),
  },
  setUser: (user: IUser) => set({ user: user }),
}));
