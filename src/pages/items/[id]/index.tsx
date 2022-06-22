import React, { ReactNode } from 'react';
import MainLayout from 'components/layouts/MainLayout';
import Content from 'components/atoms/Content';
import ItemTemplate from 'components/templates/ItemTemplate';

const Item = (): ReactNode => (
  <MainLayout>
    <ItemTemplate />
  </MainLayout>
);

export default Item;
