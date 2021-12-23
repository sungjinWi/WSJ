import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    // background: gray; // size control temp style
`;

function TodoList() {
    const todos = useTodoState();

    return (
        <TodoListBlock>
            {
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        done={todo.done}
                    />
                ))
            }
        </TodoListBlock>
    );

    // return <TodoListBlock>
    //     <TodoItem text="Create Project" done={true} />
    //     <TodoItem text="Create Project" done={true} />
    //     <TodoItem text="Create Project" done={true} />
    //     <TodoItem text="Create Project" done={true} />
    // </TodoListBlock>;
}

export default TodoList;