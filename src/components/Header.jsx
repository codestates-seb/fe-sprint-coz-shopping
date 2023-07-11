import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderTab from "./HeaderTab";
const HeaderContainer = styled.header`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  position: absolute;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);
`;

export default function Header() {
  const [isOn, setisOn] = useState(false);
  return (
    <HeaderContainer>
      <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
        <div style={{ display: "flex", marginLeft: 76 }}>
          <img
            src="/logo.png"
            alt="로고 이미지"
            style={{ width: 55, height: 30, margin: "auto", marginRight: 12 }}
          />
          <h1>COZ Shopping</h1>
        </div>
      </Link>
      <div
        style={{
          marginRight: 76,
          position: "relative",
        }}
        onMouseEnter={() => setisOn(!isOn)}
        onMouseLeave={() => setisOn(!isOn)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="24"
          viewBox="0 0 34 24"
          fill="none"
        >
          <path
            d="M2 22H32M2 12H32M2 2H32"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {isOn ? <HeaderTab /> : null}
      </div>
    </HeaderContainer>
  );
}
