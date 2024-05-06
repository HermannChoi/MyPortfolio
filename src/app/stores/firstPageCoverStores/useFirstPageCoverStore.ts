import { create } from "zustand";

interface UseFirstPageCoverStore {
  isFirstLogin: boolean;
  setIsFirstLogin: (T: boolean) => void;
}

export const useFirstPageCoverStore = create<UseFirstPageCoverStore>((set) => ({
  isFirstLogin: false,
  setIsFirstLogin: (T) => set({ isFirstLogin: T }),
}));
