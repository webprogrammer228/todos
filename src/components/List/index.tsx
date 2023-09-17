import React, {ChangeEvent} from 'react';
import './CustomList.scss';
import ArrowIcon from "../Icons/Arrow";
import { v4 as uuidv4 } from 'uuid';
import TodoItem from "../TodoItem";
import TodosFilters from "../TodosFilters";
import {ITodos} from "../../interface";
import {todosCategory} from "../../constants";

function CustomList() {
    const [todos, setTodos] = React.useState<ITodos[]>([]);
    const [collapse, setCollapse] = React.useState<boolean>(false);
    const [inputValue, setInputValue] = React.useState<string>("");
    const [currentCategoryTodo, setCurrentCategoryTodo] = React.useState<string>(todosCategory[0]);

    const handleCollapse = () => setCollapse(!collapse);
    const handleCheckbox = (id: string) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    };
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);
    const handleTodoCreate = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && inputValue.trim().length > 0) {
            setTodos([...todos, {id: uuidv4(), todo: inputValue, completed: false}])
            setInputValue("");
        }
    }
    const changeTodosCategory = (category: string) => setCurrentCategoryTodo(category);
    const handleClearComplete = () => setTodos(todos.filter(todo => !todo.completed));
    return (
        <>
            <div className="list-wrapper">
                <button onClick={handleCollapse} className={collapse ? "list-wrapper__collapse-btn--active" : "list-wrapper__collapse-btn"}>
                    <ArrowIcon />
                </button>
                <input value={inputValue} onChange={handleInput} onKeyDown={handleTodoCreate} className="list-wrapper__todo-field" type="text" placeholder="What need to be done?"/>
            </div>
            <div className={collapse && todos.length > 0 ? "collapse-items" : "collapse-items--hidden"}>
                <>
                    {todos.map(todo => {
                        if (
                            (currentCategoryTodo === todosCategory[0]) ||
                            (currentCategoryTodo === todosCategory[1] && !todo.completed) ||
                            (currentCategoryTodo === todosCategory[2] && todo.completed)
                        ) {
                            return (
                                <TodoItem key={todo.id} todo={todo} handleCheckbox={handleCheckbox}/>
                            );
                        }
                        return null;
                    })}
                </>
                <TodosFilters currentCategoryTodo={currentCategoryTodo} changeTodosCategory={changeTodosCategory} todos={todos} clearTodos={handleClearComplete}  />
            </div>
        </>
    );
}

export default CustomList;
