import React from "react";
import styled from 'styled-components';


function Footer() {

    const FooterContent = styled.div`
    text-align: center;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);    
    `; 
    const FooterSection = styled.section`
    margin-top:20px;
    `;
    return(
        <FooterSection id="footer--container">
            <FooterContent id="footer--text">개인정보 처리방침 | 이용약관</FooterContent>
        </FooterSection>
    );
}

export default Footer;