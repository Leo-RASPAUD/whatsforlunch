const getRandomItem = items => {
  return items[Math.floor(Math.random() * items.length)];
};

export default getRandomItem;
