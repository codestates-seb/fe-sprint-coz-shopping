import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
    padding: 0 76px 0 76px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;

    .logo {
        margin-right: 12px;
    }
    > h1 {
        font-size: 32px;
        height: 700;
    }
    > h1:hover {
        cursor: pointer;
    }
`;

const Wrap = styled.div`
    position: relative;
    width: 5rem;
    height: 1.5rem;
    .hamb {
    position: relative;
    cursor: pointer;
    }
`;
const Header = () => {
    const [displayMenu, setDisplayMenu] = useState(false);
    const dropmenuHandler = () => {
    setDisplayMenu(!displayMenu);
    };

    return (
    <Container>
        <Logo>
            <img classname='logo' src='../../public/icon/logo.png' alt='logoImage'></img>
            <h1> COZ Shopping</h1>
        </Logo>
        <Wrap>
            <img className='hamb' src='../icon/hambuger.png' alt='hambImage'></img>
        </Wrap>
    </Container>
    );
};

export default Header;