import { BudgetsController } from "./Controllers/BudgetsController.js";
import { ItemsController } from "./Controllers/ItemsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  budgetsController = new BudgetsController()
  itemsController = new ItemsController()
}

window["app"] = new App();
