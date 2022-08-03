import React from "react";
import styled from "styled-components";
import Todo from "../todo/Todo"
import { useSelector } from "react-redux";

const List = () => {
    const { todos } = useSelector((state) => state.todos)

    return (
        <div>
            <StTodoContainer>
                <h3>Working...🔥</h3>
                <StTodoList>
                    {todos.map((todo) => (
                        !todo.isDone &&
                        <Todo
                            key={todo.id}
                            todo={todo}
                        />
                    ))}

                </StTodoList>
            </StTodoContainer>
            <StTodoContainer>
                <h3>Done...🌠</h3>
                <StTodoList>
                    {todos.map((todo) => (
                        todo.isDone &&
                        <Todo
                            key={todo.id}
                            todo={todo}
                        />
                    ))}
                </StTodoList>
            </StTodoContainer>
        </div>
    )
}
const StTodoContainer = styled.div`
    padding: 20px;
`;
const StTodoList = styled.div`
    display: flex;
`;
export default List;