import { Link } from "react-router-dom";
import styled from 'styled-components';

const CustomFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#888888;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.8rem;
`;

function Footer() {
    return (
        <CustomFooter>
            <Link>개인정보 처리방침 | 이용 약관</Link>
            <Link>All rights reserved @ Codestates</Link>
        </CustomFooter>
    )
}

export default Footer;