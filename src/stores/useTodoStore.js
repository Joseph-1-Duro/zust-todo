import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const initialState = {
  list: [],
  update: false,
};

const useTodoStore = create(
  persist((set) => {
    return {
      ...initialState,
      addTask: (task) => set((state) => ({ list: [...state.list, task] })),
      deleteTask: (itemId) =>
        set((state) => ({
          list: state.list.filter((item) => item.id !== itemId),
        })),
      clearList: () => set({ list: [] }),
      toggleUpdate: () => set((state) => ({ update: !state.update })),
      updateText: (id, newText) =>
        set((state) => ({
          list: state.list.map((item) =>
            item.id === id ? { ...item, text: newText } : item
          ),
        })),
    };
  }),
  {
    name: "Todo list",
    storage: createJSONStorage(() => localStorage),
  }
);

export default useTodoStore;
