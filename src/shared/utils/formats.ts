import { Suggest } from 'api/Items/declaration';

export const formatSuggestions = (suggests: Suggest[]) =>
  suggests.map(({ q: label }, index) => ({ value: index + 1, label }));
