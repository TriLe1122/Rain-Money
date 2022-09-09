import { generateId } from "../Utils/generateId.js";


export class Item {

  constructor(data) {
    this.id = data.id || generateId()
    this.description = data.description
    this.budgetId = data.budgetId
    this.amount = data.amount
  }

  get Template() {
    return `
    <div class="d-flex justify-content-between mb-1">
            <p>${this.description}</p>
            <div class="d-flex gap-5">
              <p>$${this.amount}</p>
              <i onclick= "app.itemsController.deleteItem('${this.id}')"class="mdi mdi-delete text-danger selectable"></i>
            </div>
          </div>
    
    `
  }
}