import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { todosActions } from "../redux/modules/todos";

const Detail = () => {
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todo)
    const { id } = useParams();
    const navigate = useNavigate();
    const onDispatchRef = useRef();
    
    useEffect(() => {
            onDispatchRef.current = dispatch;
      });


    useEffect(() => {
        onDispatchRef.current(todosActions.GET_TODO_BY_ID(id));
    }, [id])



    return (
        <StDetail>
            <StDetailHeader>
                <div>ID : {todo.id}</div>
                <button onClick={() => navigate("/")}>이전으로</button>
            </StDetailHeader>
            <div>
                <h1>{todo.title}</h1>
                <p>{todo.body}</p>
            </div>
        </StDetail>
    )
}

const StDetail = styled.div`
    width: 300px;
    padding: 80px 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #333;
    border-radius: 15px;
    background-color: #F9F2ED;
`;

const StDetailHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
button{
    border: none;
    padding: 10px 15px;
    background-color: #F87474;
    border-radius: 15px;
    cursor: pointer;
} 
`;
export default Detail