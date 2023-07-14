import { Link } from "react-router-dom";
import { styled } from "styled-components";

const DropdownBox = styled.div`
  position: relative;
  position: absolute;
  width: 200px;
  height: 150px;
  border-radius: 12px;
  background-color: white;
  top: 41px;
  right: 32px;
  box-shadow: 0 8px 8px 0 #0000001a;

  .polygon {
    filter: drop-shadow(0px 8px 8px 0px #0000001a);
    position: absolute;
    width: 16px;
    height: 18px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    background-color: white;
    top: -18px;
    right: 54px;
    /* FIXME : 그림자추가 해야 함 */
  }

  ul {
    width: 200px;
    height: 150px;
    list-style: none;
  }

  li {
    display: inline-block;
    width: 200px;
    height: 50px;
    list-style: none;
    padding: 13px 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    display: flex;
    align-items: center;
    justify-content: center;
    /* FIXME : 스타일 수정 */
  }

  li:nth-child(2) {
    border-top: 0.5px solid rgba(0, 0, 0, 0.1);
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  }

  li:hover:not(li:first-child) {
    cursor: pointer;
  }

  .link {
    text-decoration: none;
    color: black;
  }

  .dropdown-icon {
    width: 20px;
    height: 20px;
    margin-left: 0;
    margin-right: 8px;
  }
`;

function DropdownMenu() {
  return (
    <DropdownBox>
      <div>
        <img className="polygon" src="./img/Polygon.png" alt="" />
        <ul>
          <li>애옹님, 안녕하세요!</li>
          <li>
            <img className="dropdown-icon" src="./img/gift.png" alt="" />
            <Link className="link" to="/productlistpage">
              상품리스트 페이지
            </Link>
          </li>
          <li>
            <img className="dropdown-icon" src="./img/bookmark.png" alt="" />
            <Link className="link" to="/bookmarkpage">
              북마크 페이지
            </Link>
          </li>
        </ul>
      </div>
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
