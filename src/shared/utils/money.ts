// Create our number formatter.
const formatter = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
});

export const formatMoney = (value: number = 0) => formatter.format(value);
