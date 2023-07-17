import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterBackground>
            <div>개인정보 처리방침 | 이용</div>
            <div>All rights reserved @ Codestates</div>
        </FooterBackground>
    );
}


// styled-components
const FooterBackground = styled.div`
    height: 3.625rem;
    width: 100vw;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #888888;
    font-size: 12px;
    padding: 0.6875rem 0;
    box-sizing: border-box;
`