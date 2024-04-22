import { create } from "zustand";

interface UseFirstPageCoverStore {
  userName: string;
  setUserName: (name: string) => void;
}

export const useFirstPageCoverStore = create<UseFirstPageCoverStore>((set) => ({
  userName: "",
  setUserName: (name) => set({ userName: name }),
}));
