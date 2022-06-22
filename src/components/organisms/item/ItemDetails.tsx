import { Item, ResponseDescriptionItem } from 'api/Items/declaration';
import Button from 'components/atoms/Button/Button';
import Text from 'components/atoms/Text';
import React from 'react';
import { formatMoney } from 'shared/utils/money';

type ItemProps = {
  item: Item;
  description: string;
};

export const ItemDetails = ({ item, description = '' }: ItemProps) => {
  const { thumbnail: image, title, price, sold_quantity } = item;
  const textQuantity = `Nuevo - ${sold_quantity} vendidos`;

  return (
    <div className="flex m-8 h-auto">
      <div className="w-4/5	">
        <img src={image} width="680px" height="680px" className="mb-40" />
        <Text size="28px" text="Descripción del producto" className="mb-8" />
        <Text size="16px" text={description} className="text-gray-color" />
      </div>
      <div className="w-1/5">
        <div className="w-60">
          <Text size="14px" text={textQuantity} className="mb-4 text-bold" />
          <Text size="24px" text={title} className="mb-8 text-bold" />
          <Text size="46px" text={formatMoney(price)} className="mb-8" />
        </div>
        <Button text="Comprar" color="secondary" size="sm" className="w-full" />
      </div>
    </div>
  );
};
