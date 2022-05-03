export type { Nullable } from './Nullable';
export type { ReturnComponentType } from './ReturnComponentType';

export type PizzasType = {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category?: number;
  rating?: number;
};
