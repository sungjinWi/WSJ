import React, {useReducer} from "react";
import TodoProvider from "./TodoContext";

const initialTodos = [
    {
        id:1,
        title:"Todo 1",
        complete: false
    },
    {
        id:2,
        title:"Todo 2",
        complete: false
    }
];

const reducer = (state, action) => {
    switch(action.type) {
        case 'COMPLELTE':
            return state.map((todo) => {
                if(TodoProvider.if===action.id) {
                    return {...todo, complete: !todo.comlplete};
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
}

function Todos() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        dispatch({type: "COMPLETE", id: todo.id});
    };

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input type="checkbox"
                        checked={todo.complete}
                        onChange={()=>handleComplete(todo)}
                        />
                        {todo.title};
                    </label>
                </div>
            ))}
        </>
    )
}

export default Todos;
