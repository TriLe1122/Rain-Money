import { appState } from "../AppState.js"
import { itemsService } from "../Services/ItemsService.js"
import { generateId } from "../Utils/generateId.js"
import { Item } from "./Item.js"

export class Budget {
  constructor(data) {
    this.name = data.name
    this.total = data.total
    this.type = data.type
    this.id = data.id || generateId()



  }



  // TODO change string interpulations , 

  get Template() {
    return  /*html*/ ` 
      <div class="card elevation-2 my-3 mx-4 ">
        <div class="card-header d-flex justify-content-between ">
          <div class="d-flex gap-3">
            <input type="checkbox" name="" id="">
            <i class="mdi mdi-television"></i>
            <p>${this.name}</p>
          </div>
          
          <p> 666 out of  <span class="text-blue fw-bold">$${this.total}</span> </p>
          
          <button onclick="app.budgetsController.removeBudget('${this.id}')" class="btn btn-danger">
          <b><i class="mdi mdi-cancel text-light"></i></b>
          
          </button>
        </div>
        <div class="card-body">
       
          ${this.ItemsTemplate}
          
          <div class="card-footer mt-3 ">
            <form  onsubmit="app.itemsController.createItem('${this.id}')">
              <label for="name">Add Source</label>
              <div class="d-flex">
                <input type="text" class="form-control w-30" name="description" required placeholder="Budget Here">
                <input type="number" class="form-control w-50" name="amount" required placeholder="$">
                <button class="btn btn-primary px-4" type="submit">Add</button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    
    `
  }

  get ItemsTemplate() {
    let template = ''
    this.Items.forEach(item => template += item.Template)
    return template
  }

  get Items() {

    let items = appState.items.filter(item => item.budgetId == this.id)
    return items
  }
}
