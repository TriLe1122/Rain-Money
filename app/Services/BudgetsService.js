import { appState } from "../AppState.js"
import { Budget } from "../Models/Budget.js"
import { saveState } from "../Utils/Store.js"

class BudgetsService {
  createBudget(formData) {
    let budget = new Budget(formData)
    appState.budgets = [budget, ...appState.budgets]
    console.log(appState.budgets)
    saveState('budgets', appState.budgets)

  }

  // removeBudget(id) {
  //   if (window.confirm('Do you want to remove this item?')) {
  //     budgetsService.removeBudget(id)
  //   }
  // }

}

// BudgetsService.removeItem = undefined

export const budgetsService = new BudgetsService()