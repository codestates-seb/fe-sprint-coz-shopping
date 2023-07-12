import styled from "styled-components";

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  max-width: 2400px;
  top: 0;
  height: 80px;
  box-shadow: 0 7px 0 0 grey;
`;

const Container = styled.div`
  height: 100%;
`;

const LogoSpan = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const ImgLogoCotainer = styled.div`
  margin-left: 76px;
  cursor: pointer;
`;

const HamburgerContainer = styled.div`
  margin-right: 76px;
  cursor: pointer;
`;

function Header() {
  return (
    <Container>
      <HeadContainer>
        <ImgLogoCotainer>
          <img src="logo.png" alt="logo" />
          <LogoSpan> COZ shopping </LogoSpan>
        </ImgLogoCotainer>
        <HamburgerContainer>
          <img src="hamburger.png" alt="hamburger" />
        </HamburgerContainer>
      </HeadContainer>
    </Container>
  );
}

export default Header;
