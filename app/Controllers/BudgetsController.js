import { appState } from "../AppState.js";
import { budgetsService } from "../Services/BudgetsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawBudget() {
  let template = ''
  appState.budgets.forEach(budget => template += budget.Template)
  setHTML('budgets', template)

}
export class BudgetsController {
  constructor() {
    appState.on('budgets', _drawBudget)
    appState.on('items', _drawBudget)
    _drawBudget()
  }
  createBudget() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let formData = getFormData(form)
      budgetsService.createBudget(formData)
      console.log(formData);
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.log('[CREATE _BUDGET]', error);
    }
  }
}




// form name and the form for have to match for the formhandler to work