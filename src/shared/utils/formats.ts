import { Suggest } from 'api/Items/declaration';

export const formatSuggestions = (suggests: Suggest[]) =>
  suggests.map(({ q: label }, index) => ({ value: index + 1, label }));

export const formatBreadcrumbs = (filters: any[], type: string) => {
  const breadcrumbType = filters?.find(({ id }) => id === type);
  const path = breadcrumbType?.values?.[0]?.path_from_root;
  return path ? path?.map(({ name }) => name) : [];
};
