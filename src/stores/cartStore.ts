import { create } from 'zustand';

type Items = {
  id: number;
  nameItem: string;
  tag: string[];
  price: number;
  isAvailable: boolean;
  stock: number;
};

type CartStore = {
  items: string[];

  addItems: (item: string[]) => void;
};

export const useCartStore = create<CartStore>()((set) => ({
  items: ['Computer', 'Mouse'],
  addItems: (item) =>
    set({
      items: [...item],
    }),
}));
