import { Item } from 'api/Items/declaration';
import { Dispatch, SetStateAction } from 'react';

export type ShoppingCart = {
  items: Item[];
};

export type ItemsState = {
  itemsState: Item[];
  setItemsState: Dispatch<SetStateAction<Item[]>>;
};
