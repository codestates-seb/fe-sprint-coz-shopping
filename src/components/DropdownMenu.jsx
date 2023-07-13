import { Link } from "react-router-dom";
import { styled } from "styled-components";

const DropdownBox = styled.div`
  position: relative;
  position: absolute;
  width: 200px;
  border-radius: 12px;
  height: 150px;
  background-color: white;
  top: 41px;
  right: 32px;
  box-shadow: 0px 8px 8px 0px #0000001a;

  /* FIXME : 그립자효과주기 */
  .polygon {
    filter: drop-shadow(0px 8px 8px 0px #0000001a);
    position: absolute;
    width: 16px;
    height: 18px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    background-color: white;
    top: -18px;
    right: 54px;
  }

  ul {
    width: 200px;
    height: 150px;
    list-style: none;
  }
  li {
    width: 200px;
    height: 50px;
    list-style: none;
    text-align: center;
    padding: 13px 10px;
  }

  li:nth-child(2) {
    border-top: 0.5px solid rgba(0, 0, 0, 0.1);
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  }

  li span {
    font-size: 16px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-decoration: none;
  }
  .link {
    text-decoration: none;
    color: black;
  }
`;

function DropdownMenu() {
  return (
    <DropdownBox className="dropdown_container">
      <div className="polygon"></div>
      <ul>
        <li>
          <span>애옹님, 안녕하세요!</span>
        </li>
        <li>
          <span>
            <Link className="link" to="/productlistpage">
              상품리스트 페이지
            </Link>
          </span>
        </li>
        <li>
          <span>
            <Link className="link" to="/bookmarkpage">
              북마크 페이지
            </Link>
          </span>
        </li>
      </ul>
    </DropdownBox>
  );
}

export default DropdownMenu;

/* 
TODO : 라우터 연결

드롭다운 메뉴  - 상품리스트 클릭  -> 상품리스트 패이지
            - 북마크   클릭  -> 북마크 페이지
  path="/" MainPage 
  path="/productlistpage" ProductListPage
  path="/bookmarkpage" BookmarkPage 

*/
