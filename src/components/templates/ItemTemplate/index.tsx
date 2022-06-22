import Breadcrumb from 'components/atoms/Breadcrumb';
import Content from 'components/atoms/Content';
import Loading from 'components/atoms/Loading';
import { ItemDetails } from 'components/organisms/item/ItemDetails';
import { useRouter } from 'next/router';
import { useItem, useItemDescription } from 'queries/items';
import React, { ReactElement, useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { formatBreadcrumbs } from 'shared/utils/formats';
const CATEGORY_TYPE = 'category';

const ItemTemplate = (): ReactElement => {
  const router = useRouter();
  const id = router.query?.id?.toString();
  const { data, isLoading } = useItem(id);
  const { data: dataDescription } = useItemDescription(id);
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
          <Content>{data && <ItemDetails item={data} description={dataDescription?.plain_text} />}</Content>;
        </Else>
      </If>
    </>
  );
};

export default ItemTemplate;
