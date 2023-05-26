import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = styled.main`
    width: 100%;
    max-width: 1128px;
    margin: 24px auto;
    margin-top: 12rem;
`

export default function Root() {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
}