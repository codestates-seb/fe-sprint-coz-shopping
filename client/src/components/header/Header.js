import React from 'react';
import styled from "styled-components";

export const HeaderComponent = styled.header`
    background-color: lightblue;
    margin: 0;
    position: sticky;
    width: 100vw;
    height: 70px;
`;

export const Header = () => {
    return (
        <HeaderComponent>
            헤더임 
        </HeaderComponent>
    );
};