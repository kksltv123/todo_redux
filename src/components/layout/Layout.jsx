import React from "react";
import styled from "styled-components"

const Layout = ({ children }) => {
    return(
        <StLayout>{ children }</StLayout>
    )
}

const StLayout = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: auto;
`; 


export default Layout;