import { Item } from 'api/Items/declaration';
import Text from 'components/atoms/Text';
import { useRouter } from 'next/router';
import React from 'react';
import routes from 'shared/constants/routes';
import { formatMoney } from 'shared/utils/money';
import { ellipsisString } from 'shared/utils/strings';
const { itemsRoute } = routes;

type ItemProps = {
  item: Item;
};

export const ItemCard = ({ item }: ItemProps) => {
  const router = useRouter();
  const {
    id,
    thumbnail,
    price,
    title,
    shipping: { free_shipping },
    address: { state_name },
  } = item;
  const goToItem = () => router.push(`${itemsRoute}/${id}`);

  return (
    <li className="flex justify-between w-auto cursor-pointer p-4 hover:bg-second-gray-color" onClick={goToItem}>
      <img src={thumbnail} height="160px" className="mr-4 w-48 h-48 rounded-md shadow-xs" />
      <div className="w-11/12">
        <div className="flex">
          <Text className="text-dark-color mt-4 mb-8 text-dark-color" text={formatMoney(price)} size="24px" />
          {free_shipping && (
            <img src="/assets/ic_shipping_large.png" className="w-5 h-5 mt-6 ml-3 object-fill" title="Free shipping" />
          )}
        </div>
        <Text className="text-dark-gray-color" text={ellipsisString(title, 60)} size="18px" />
        <Text className="text-dark-gray-color" text="Completo Unico!" size="18px" />
      </div>
      <Text className="text-dark-gray-color mt-4 w-2/6" text={state_name} size="12px" />
    </li>
  );
};
