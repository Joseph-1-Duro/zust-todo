import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const initialState = {
  list: [],
  update: false,
  updateId: null
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
      setUpdateId: (id) => set(() => ({updateId: id})),
      updateText: (itemId, newText) =>
        set((state) => ({
          list: state.list.map((item) =>
            item.id === itemId ? 
            { ...item, text: newText }
            : 
            item
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
