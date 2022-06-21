import { v4 as uuidv4 } from 'uuid';

export default (array, keyGetter) => {
  const map = new Map();

  array.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);

    if (!key) map.set(uuidv4(), [item]);
    else if (!collection) map.set(key, [item]);
    else collection.push(item);
  });

  return [...map.values()];
};
