import { create } from "zustand";

interface UseFirstPageCoverStore {
  userName: string;
  setUserName: (name: string) => void;
  isFirstLogin: boolean;
  setIsFirstLogin: (T: boolean) => void;
}

export const useFirstPageCoverStore = create<UseFirstPageCoverStore>((set) => ({
  userName: "",
  setUserName: (name) => set({ userName: name }),
  isFirstLogin: false,
  setIsFirstLogin: (T) => set({ isFirstLogin: T }),
}));
