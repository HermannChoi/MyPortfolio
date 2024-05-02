import { create } from "zustand";

interface UseTimeLineStore {
  order: number | null;
  setOrder: (order: number) => void;
}

export const useTimeLineStore = create<UseTimeLineStore>((set) => ({
  order: null,
  setOrder: (num) => set({ order: num }),
}));
