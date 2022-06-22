import ItemsService from 'api/Items';
import { useQuery } from 'react-query';

export const useItem = (id: string) => {
  return useQuery(['item', id], async () => {
    return id ? await ItemsService.findOne(id) : null;
  });
};

export const useItemDescription = (id: string) => {
  return useQuery(['itemDescription', id], async () => {
    return id ? await ItemsService.findDescription(id) : {};
  });
};

export const useItems = (querySearch: string, category: string) => {
  const emptyResponse = { results: [], filters: [] };
  return useQuery(['items', querySearch], async () => {
    return querySearch || category ? await ItemsService.findAll({ q: querySearch, category }) : emptyResponse;
  });
};
