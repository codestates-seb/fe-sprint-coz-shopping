import { styled } from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderStyle = styled.header`
  box-sizing: border-box;
  position: relative;
  /* width: 80rem; */
  height: 5rem;
  background: #fff;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: row;
  padding-left: 4.75rem;
  padding-right: 4.75rem;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 3.4375rem;
    height: 1.875rem;
    flex-shrink: 0;
    background: url("images/logo.png");
  }

  .title {
    display: flex;
    width: 14.375rem;
    height: 1.85188rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    color: #000;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 88.023%;

    margin-left: 0.75rem;
  }

  .section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 3rem;
  right: 2rem;
  width: 12.5rem;
  height: 10.75rem;

  display: flex;
  flex-direction: column;
  /* box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 1); */

  > img {
    position: relative;
    margin-left: 8.13rem;
    margin-top: 0.25rem;
    width: 1rem;
    height: 1.125rem;
  }

  ul {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    display: flex;
    width: 12.5rem;
    height: 9.375rem;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;

    border-radius: 0.75rem;
    background: #fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  }

  li {
    box-sizing: border-box;
    list-style: none;
    width: 12.5rem;
    height: 3.125rem;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
    color: #000;
    text-align: center;
    /* font-family: Inter; */
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 88.023%;
    flex-shrink: 0;
  }
  li.mypage{
    display: flex;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    column-gap: 0.5rem;
  }
  .link_li:last-child {
    border-radius: 0 0 0.75rem 0.75rem;
    border-bottom: none;
  }

  li > img {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
  }

  .link_li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding-left: 1.5rem;
  }

  .li_icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: baseline;
    column-gap: 0.5rem;
  }
`;

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <HeaderStyle>
      <section className="section">
        <Link to={"/"}>
          <div className="logo" alt="logo"></div>
        </Link>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <div className="title">COZ Shopping</div>
        </Link>
      </section>
      <section className="section">
        <div>
          {dropdown ? (
            <Dropdown>
              <img src="/images/polygon.png" alt=""></img>
              <ul>
                <li className="mypage">유효재님, 안녕하세요!</li>
                <Link to={"/products/list"} style={{ textDecoration: "none" }}>
                  <li className="link_li">
                    <div className="li_icon">
                      <img src="/images/present.svg" alt=""></img>
                      상품리스트 페이지
                    </div>
                  </li>
                </Link>
                <Link to={"/products/list"} style={{ textDecoration: "none" }}>
                  <li className="link_li">
                    <div className="li_icon">
                      <img src="/images/star.svg" alt=""></img>
                      북마크 페이지
                    </div>
                  </li>
                </Link>
              </ul>
            </Dropdown>
          ) : null}
        </div>
        <img
          src="images/hamburger.svg"
          alt="dropdown"
          onClick={() => setDropdown(!dropdown)}
        />
      </section>
    </HeaderStyle>
  );
};

export default Header;
