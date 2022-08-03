import React from "react";
import styled from "styled-components"

const Header = () => {
    return(
        <StHeader>
            <div>My Todo List</div>
            <div>React</div>
        </StHeader>
    )
}

const StHeader = styled.header`
    margin: auto;
    background-color: #3AB0FF;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px -5px #333;
`; 

export default Header;