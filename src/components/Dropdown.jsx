import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import productsListIcon from 'assets/productsListIcon.svg';
import bookmarkIcon from 'assets/bookmarkIcon.svg';

function Dropdown() {
  return (
    <DropdownWrapper>
      <WelcomeText>김민석님, 안녕하세요!</WelcomeText>
      <LinkToProductsList to="/products/list">
        상품리스트 페이지
      </LinkToProductsList>
      <LinkToBookmark to="/bookmark">북마크 페이지</LinkToBookmark>
    </DropdownWrapper>
  );
}

const LINK_STYLE = css`
  display: flex;
  align-items: center;
  width: 220px;
  height: 50px;
  padding-left: 52px;
  background-position: 24px 15px;
`;

const DropdownWrapper = styled.nav`
  position: absolute;
  top: 70px;
  right: -64px;
  width: 220px;
  display: flex;
  flex-flow: column wrap;
  height: 150px;
  border-radius: 12px;
  background-color: #ffffff;
  font-size: 16px;
  box-shadow: 0px 8px 8px 0px #0000001a;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 130px;
    width: 0;
    height: 0;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 18px solid transparent;
    border-bottom-color: #ffffff;
    border-top: 0;
    margin-top: -18px;
  }
`;

const WelcomeText = styled.p`
  padding: 13px 0;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const LinkToProductsList = styled(Link)`
  background: no-repeat url(${productsListIcon});
  ${LINK_STYLE};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const LinkToBookmark = styled(Link)`
  background: no-repeat url(${bookmarkIcon});
  ${LINK_STYLE};
  background-position: 24px 15px;
`;

export default Dropdown;
