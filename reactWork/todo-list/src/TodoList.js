import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    overflow-y: auto;
    // background: gray; // size control temp style
`;

function TodoList() {
    return <TodoListBlock>
        <TodoItem text="Create Project" done={true} />
        <TodoItem text="Create Project" done={true} />
        <TodoItem text="Create Project" done={true} />
        <TodoItem text="Create Project" done={true} />
    </TodoListBlock>;
}

export default TodoList;