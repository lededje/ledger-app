export function filterByAmount(fields) {
  return {
    type: 'ADD_ITEM',
    fields,
  };
}