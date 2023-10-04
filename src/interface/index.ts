import { TodosCategory } from "../constants";

export interface ITodos {
  id: string;
  todo: string;
  completed: boolean;
  category: TodosCategory;
}
