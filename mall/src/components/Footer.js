import React from "react";
import styled from "styled-components";

export const Footerbody = styled.div`
display: flex;
align-items: center;
color: #888888;
box-sizing: border-box;
width: 100%;
background: #FFFFFF;
border-top: 1px solid rgba(0, 0, 0, 0.1);


 .lineone {
position: absolute;
left: 44.14%;
margin-top: 5rem;
font-weight: 400;
font-size: 12px;
line-height: 88.02%;

 }

 .linetwo {
position: absolute;
left: 42.5%;
font-weight: 400;
font-size: 12px;
line-height: 88.02%;
margin-top: 7rem;

 }
`

function Footer(){
    return(
        <Footerbody>
            <div className="lineone">개인정보 처리방침 | 이용 약관</div>
            <div className="linetwo">All rights reserved @ Codestates</div>
        </Footerbody>
    )
}

export default Footer;