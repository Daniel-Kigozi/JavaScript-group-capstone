const itemsCounter = (items) => {
  if (!Array.isArray(items)) {
    return 0;
  }
  return items.length;
}

export default itemsCounter;