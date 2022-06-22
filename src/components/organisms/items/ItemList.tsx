import { Item } from 'api/Items/declaration';
import { ItemCard } from 'components/molecules/ItemCard';
import React, { ReactElement } from 'react';

type ItemListProps = {
  items: Item[];
};

export const ItemList = ({ items = [] }: ItemListProps): ReactElement => {
  return (
    <ul role="list" className="divide-y divide-white-gray-color">
      {items.slice(0, 4).map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </ul>
  );
};
