import {ITodos} from "../../interface";

function TodoItem({ todo, handleCheckbox }: {todo: ITodos, handleCheckbox: (id: string) => void}) {
    return (
        <div className="collapse-items__collapse-item" key={todo.id}>
            <div className="collapse-items__checkbox">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleCheckbox(todo.id)}
                />
            </div>
            <span
                className={todo.completed ? "collapse-items__collapse-item__title--checked" : "collapse-items__collapse-item__title"}>
                {todo.todo  }
            </span>
        </div>
    );
}

export default TodoItem;
