import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { todosActions } from "../../redux/modules/todos";


const Todo = ({ todo }) => {
    const dispatch = useDispatch();
    const onRemove = (id) => {
        dispatch(todosActions.REMOVE(id))
    }
    const onToggle = (id) => {
        dispatch(todosActions.TOGGLE(id))
    }
    const navigate = useNavigate();

    return (
        <StTodoBox>
            <StTodoDetail onClick={() => {navigate(`/${todo.id}`)}}>상세보기</StTodoDetail>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
            <div>
                <StTodoButton onClick={() => onRemove(todo.id)}>삭제하기</StTodoButton>
                <StTodoButton onClick={() => onToggle(todo.id)}>{todo.isDone ? "취소" : "완료"}</StTodoButton>
            </div>
        </StTodoBox>
    )
}

const StTodoBox = styled.div`
    padding: 20px;
    background-color: #F9F2ED;
    border-radius: 10px;
    box-shadow: 5px 5px 5px -5px #333;
    margin: 10px;
`;
const StTodoDetail = styled.button`
    border: none;
    padding: 5px 10px;
    font-size: 12px;
    background-color: #FFB562;
    border-radius: 10px;
    cursor: pointer;
`;
const StTodoButton = styled.button`
    border: none;
    padding: 10px 15px;
    background-color: #F87474;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
    &:last-child {
        background-color: #3AB0FF;
    }
`;

export default Todo;