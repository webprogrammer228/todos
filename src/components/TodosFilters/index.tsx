import React from "react";
import { ITodos } from "../../interface";
import { todosCategories, TodosCategory } from "../../constants";

interface ITodoFiltersProps {
  currentCategoryTodo: string;
  changeTodoCategory: (categoryId: string) => void;
  todos: ITodos[];
  clearTodos: () => void;
}

function TodoFilters(props: ITodoFiltersProps) {
  const { currentCategoryTodo, changeTodoCategory, todos, clearTodos } = props;
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="collapse-items__menu">
      {currentCategoryTodo === TodosCategory.all && (
        <span>{activeCount} items left</span>
      )}
      {currentCategoryTodo === TodosCategory.active && (
        <span>{activeCount} items left</span>
      )}
      {currentCategoryTodo === TodosCategory.completed && (
        <span>{completedCount} items completed</span>
      )}
      <div className="collapse-items__todo-filters">
        {todosCategories.map((todo) => (
          <button
            onClick={() => changeTodoCategory(todo)}
            className={
              currentCategoryTodo === todo
                ? "collapse-items__filter-btn--active"
                : "collapse-items__filter-btn"
            }
          >
            {todo}
          </button>
        ))}
      </div>
      <span onClick={clearTodos} className="collapse-items__clear-btn">
        Clear completed
      </span>
    </div>
  );
}

export default TodoFilters;
