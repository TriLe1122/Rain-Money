import { appState } from "../AppState.js"
import { Item } from "../Models/Item.js";
import { saveState } from "../Utils/Store.js";

class ItemsService {
  createItem(newItem) {
    let item = new Item(newItem)
    appState.items = [item, ...appState.items]
    console.log('ItemsService CreateItem', appState.items);
    saveState('items', appState.items)

  }

  deleteItem(itemId) {
    let items = appState.items.filter(i => i.id != itemId);
    appState.items = items
    saveState("items", appState.items)

  }
}
export const itemsService = new ItemsService()