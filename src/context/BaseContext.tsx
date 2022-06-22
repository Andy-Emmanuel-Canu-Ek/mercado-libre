import { FC } from 'react';
import { ItemsProvider } from 'context/ItemsContext';

export const BaseContext: FC = ({ children }) => <ItemsProvider>{children}</ItemsProvider>;
