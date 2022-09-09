import { itemsService } from "../Services/ItemsService.js"
import { getFormData } from "../Utils/FormHandler.js"

export class ItemsController {

  constructor() {

  }



  createItem(budgetId) {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let newItem = getFormData(form)
      newItem.budgetId = budgetId
      itemsService.createItem(newItem)
      console.log(newItem);
      form.reset()
    } catch (error) {
      console.log('[CREATE_ITEM]', error);
    }
  }

  deleteItem(itemId) {
    console.log(itemId);
    try {
      itemsService.deleteItem(itemId)
    } catch (error) {
      console.log(error);
    }
  }

}