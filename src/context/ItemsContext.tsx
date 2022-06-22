import { createContext, FC, useState } from 'react';
import { ItemsState } from 'shared/types/context/items';

const contextDefaultValues: ItemsState = {
  itemsState: [],
  setItemsState: () => {},
};

export const ItemsContext = createContext<ItemsState>(contextDefaultValues);

export const ItemsProvider: FC = ({ children }) => {
  const [itemsState, setItemsState] = useState(contextDefaultValues.itemsState);

  return (
    <ItemsContext.Provider
      value={{
        itemsState,
        setItemsState,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
