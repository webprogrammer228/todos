import React from 'react';
import {ITodos} from "../../interface";
import {todosCategory} from "../../constants";

interface ITodoFiltersProps {
    currentCategoryTodo: string;
    changeTodosCategory: (categoryId: string) => void;
    todos: ITodos[];
    clearTodos: () => void;
}

function TodoFilters(props: ITodoFiltersProps) {
    const { currentCategoryTodo, changeTodosCategory, todos, clearTodos } = props;
    const activeCount = todos.filter(todo => !todo.completed).length;
    const completedCount = todos.filter(todo => todo.completed).length;

    return (
        <div className="collapse-items__menu">
            {currentCategoryTodo === todosCategory[0] && <span>{activeCount} items left</span>}
            {currentCategoryTodo === todosCategory[1] && <span>{activeCount} items left</span>}
            {currentCategoryTodo === todosCategory[2] && <span>{completedCount} items completed</span>}
            <div className="collapse-items__todo-filters">
                <button onClick={() => changeTodosCategory(todosCategory[0])} className={currentCategoryTodo === todosCategory[0] ? "collapse-items__filter-btn--active" : "collapse-items__filter-btn"}>{todosCategory[0]}</button>
                <button onClick={() => changeTodosCategory(todosCategory[1])} className={currentCategoryTodo === todosCategory[1] ? "collapse-items__filter-btn--active" : "collapse-items__filter-btn"}>{todosCategory[1]}</button>
                <button onClick={() => changeTodosCategory(todosCategory[2])} className={currentCategoryTodo === todosCategory[2] ? "collapse-items__filter-btn--active" : "collapse-items__filter-btn"}>{todosCategory[2]}</button>
            </div>
            <span onClick={clearTodos} className="collapse-items__clear-btn">Clear completed</span>
        </div>
    );
}

export default TodoFilters;
