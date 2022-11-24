export const addItem = async (item, allItems) => {
  if (allItems.length > 0) {
    const lastId = allItems[allItems.length - 1].id
    item.id = lastId + 1
    return item
  }
  item.id = 0
  return item
}
