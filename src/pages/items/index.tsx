import React, { ReactNode } from 'react';
import MainLayout from 'components/layouts/MainLayout';
import Content from 'components/atoms/Content';
import ItemsTemplate from 'components/templates/ItemsTemplate';

const Items = (): ReactNode => (
  <MainLayout>
      <ItemsTemplate />
  </MainLayout>
);

export default Items;
