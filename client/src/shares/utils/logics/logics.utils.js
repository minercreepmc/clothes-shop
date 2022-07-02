export const addItemToArray = (itemToAdd, array) => {
  return [...array, itemToAdd];
};

export const removeItemFromArray = (itemToRemove, array) => {
  return array.filter((item) => item._id !== itemToRemove._id);
};

export const updateItemToArray = (itemToUpdate, array) => {
  return array.map((item) => {
    if (item._id === itemToUpdate._id) return itemToUpdate;

    return item;
  });
};

export const truncateText = (string, maxLength) => {
  return string.length > maxLength
    ? string.slice(0, maxLength).concat('...')
    : string;
};

export const compose =
  (...fns) =>
    (x) =>
      fns.reduceRight((res, fn) => fn(res), x);
