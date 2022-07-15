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

const zipObject = (keys = [], values = []) => {
  return keys.reduce((accumulator, key, index) => {
    accumulator[key] = values[index];
    return accumulator;
  }, {});
};

export const recursiveObjectPromiseAll = function(obj) {
  const keys = Object.keys(obj);
  return Promise.all(
    keys.map((key) => {
      const value = obj[key];
      // Promise.resolve(value) !== value should work, but !value.then always works
      if (typeof value === 'object' && !value.then) {
        return recursiveObjectPromiseAll(value);
      }
      return value;
    }),
  ).then((result) => zipObject(keys, result));
};

export const mapToArray = function(map) {
  return Object.keys(map).map((key) => map[key]);
};
