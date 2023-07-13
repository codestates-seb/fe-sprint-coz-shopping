import React, { useState } from "react"
import './Header.css'
import Dropdown from "./Components/Dropdown"

export default function Header () {
    const [DropDown, setDropDown] = useState(false)
    // 클릭시 현재값이 true가 되게 구현
    const handleClick = () => {
        setDropDown(!DropDown)
    }

    return (
        <header className="header_container">
            <div className="header_logo">
                <img src="logo.png"/>
                <span className="header_font">COZ Shopping</span>
            </div>
            <button className="header_icon" onClick={handleClick}>
                <img src="hamburger.png"/>
            </button>
            {DropDown && <Dropdown/>}
        </header>
    )
}