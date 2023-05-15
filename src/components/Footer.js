import styled from "styled-components";

export const FooterContainer = styled.footer`
    text-align: center;
    color: #888888;
    font-size: 1.2rem;
    font-weight: 400;
`;
const Footer = () => {
    return(
        <FooterContainer>
            <div>개인정보 처리방침 | 이용 약관</div>
            <div>All rights reserved @ Codestates</div>
        </FooterContainer>
    )
}
export default Footer;