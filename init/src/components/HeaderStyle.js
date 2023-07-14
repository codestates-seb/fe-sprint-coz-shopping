import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  background-color: white;
  max-width: 2400px;
  top: 0;
  height: 80px;
  width: 100%;
  box-shadow: 0 7px 0 0 grey;
`;

export const Container = styled.div`
  height: 80px;
`;

export const LogoSpan = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const ImgLogoCotainer = styled.div`
  margin-left: 76px;
  cursor: pointer;
`;

export const HamburgerContainer = styled.div`
  margin-right: 76px;
`;

export const Hamburger = styled.img`
  cursor: pointer;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;
