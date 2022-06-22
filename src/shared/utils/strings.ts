import { DASH } from 'shared/constants/constants';

export const ellipsisString = (value: string, length = 40) => {
  if (!value) return DASH;
  return value.length >= length ? `${value.slice(0, length)}...` : value;
};
