import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux"
import nextId from "react-id-generator";
import styled from "styled-components"
import { todosActions } from "../../redux/modules/todos";

const Form = () => {
    const id = nextId("detail");

    const initialstate = {
        id: 0,
        title: "",
        body: "",
        isDone: false
    }

    const [inputs, setInputs] = useState(initialstate);
    
    const dispatch = useDispatch();

    const onChangeHandler = (event) => {
        const {value, name} = event.target;
        setInputs({ ...inputs, [name]:value })
    }

    const { title, body } = inputs;

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if ( title === "" || body === "") return;
        
        dispatch(todosActions.ADD_TODO({
            id,
            title,
            body,
            isDone: false,
        }))
        setInputs(initialstate);
    }


    return(
        <StFormContainer>
            <form onSubmit={onSubmitHandler}>
                <StLabel>제목</StLabel>
                <StInput
                    type="text"
                    onChange={onChangeHandler}
                    name="title"
                    value={title}
                />
                <StLabel>내용</StLabel>
                <StInput
                    type="text"
                    onChange={onChangeHandler}
                    name="body"
                    value={body}
                />
                <StButton>추가하기</StButton>
            </form>
        </StFormContainer>
    )
}
const StFormContainer = styled.div`
    background-color: #FFB562;
    padding: 25px;
    border-radius: 10px;
    position: relative;
    margin-top: 5px;
    box-shadow: 5px 5px 5px -5px #333;
`;
const StLabel = styled.label`
    margin: 0px 20px;
`;
const StInput = styled.input`
    width: 300px;
    height: 30px;
    border-radius: 10px;
    border: none;
`;
const StButton = styled.button`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px 25px;
    border-radius: 10px;
    background-color: #F87474;
    color: #fff;
    font-weight: bold;
    border: none;
    transition-duration: 300ms;
    cursor: pointer;
    &:hover{  
    background-color : #5800FF;
    }
`;

export default Form;