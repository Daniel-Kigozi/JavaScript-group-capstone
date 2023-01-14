const itemsCounter = (items) => {
  if (!Array.isArray(items)) {
    return 0;
  }
  return items.length;
};

const likesCounter = (target, likesArray, likesContainer) => {
  const item = likesArray.find((item) => item.item_id === target.id);
  if (item) {
    likesContainer.innerHTML = `${item.likes} likes`;
  }
};

export { itemsCounter, likesCounter };
