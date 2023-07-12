import styled from "styled-components";
import React, { useState } from 'react';

// 푸터
const Footer = styled.footer`

    .footerWrap {
        height:58px;
        /* width:1280px; */
        margin:auto;
        border-top:solid 1px #0000001A;;
        display:flex;
        flex-direction: column;
        justify-content: center;
        > span {
            height:18px;
            font-size : 12px;
            color : #888888;
            display:flex;
            flex-direction: column;
            align-items: center;
        }
    }

`

const Footers = () => {

    return (
        <>
            <Footer>
                <div className="footerWrap">
                    <span>개인정보 처리방침 | 이용 약관</span>
                    <span>All rights reserved @ Codestates</span>
                </div>
            </Footer>
        </>

    );
};

export default Footers;