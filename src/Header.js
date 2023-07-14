import React, { useState } from "react"
import './Header.css'
import Dropdown from "./Components/Dropdown"
import { Link } from "react-router-dom"

export default function Header () {
    const [DropDown, setDropDown] = useState(false)
    // 클릭시 현재값이 true가 되게 구현
    const handleClick = () => {
        setDropDown(!DropDown)
    }

    return (
        <header className="header_container">
            <div className="header_logo">
                <Link to="/">
                    <img src="logo.png" alt="Logo"/>
                </Link>
                <span className="header_font">COZ Shopping</span>
            </div>
            <button className="header_icon" onClick={handleClick}>
                <img src="hamburger.png"/>
            </button>
            {/* 조건부 렌더링 */}
            {/* DropDown이 true면 doptdown 컴포넌트를 보여줘 */}
            {DropDown && <Dropdown/>}
        </header>
    )
}