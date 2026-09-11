import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type CounterStore = {
  count: number;

  increment: () => void;
  decrement: () => void;
  reset: () => void;
  printDouble: () => void;
};

export const useCounterStore = create<CounterStore>()(
  devtools((set, get) => ({
    count: 0,
    increment: () =>
      set((prevValue) => {
        console.log('current count: ', prevValue.count);
        const nextCount = prevValue.count + 1;
        console.log('Next count : ', nextCount);
        return {
          count: nextCount,
        };
      }),
    decrement: () =>
      set((prevValue) => ({
        count: prevValue.count - 1,
      })),
    reset: () =>
      set({
        count: 0,
      }),
    printDouble: () => {
      const count = get().count;
      console.log(count * 2);
    },
  }))
);
