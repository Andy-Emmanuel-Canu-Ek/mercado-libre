import Breadcrumb from 'components/atoms/Breadcrumb';
import Content from 'components/atoms/Content';
import Loading from 'components/atoms/Loading';
import { ItemList } from 'components/organisms/items/ItemList';
import { useRouter } from 'next/router';
import { useItems } from 'queries/items';
import React, { ReactElement, useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { formatBreadcrumbs } from 'shared/utils/formats';
const CATEGORY_TYPE = 'category';

const ItemsTemplate = (): ReactElement => {
  const router = useRouter();
  const search = router.query?.search?.toString();
  const category = router.query?.category?.toString();
  const { data, isLoading } = useItems(search, category);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>();

  useEffect(() => {
    setBreadcrumbs(formatBreadcrumbs(data?.filters, CATEGORY_TYPE));
  }, [data?.filters]);

  return (
    <>
      <If condition={isLoading}>
        <Then>
          <Loading />
        </Then>
        <Else>
          <Breadcrumb list={breadcrumbs} />
          <Content>
            <ItemList items={data?.results} />
          </Content>
        </Else>
      </If>
    </>
  );
};

export default ItemsTemplate;
