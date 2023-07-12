import React from "react";
import "./header.css"
import { BrowserRouter as Router, Link } from 'react-router-dom'
import {useState} from 'react'

export default function Header() {
    const [ isDropdown, setDropdown ] = useState(false)

    const dropdownHandler = () => {
        setDropdown(!isDropdown)
    }

    return (
    <Router>
        <header className="header-container">
            <Link to ='/'>
            <div className="logo-container">
                <div className="logo-img">
                    <img src="logo.png" alt="logo" /> 
                </div>
                <span className="logo-title">COZ Shopping</span>
            </div>
            </Link>
            <img src="icon.png" alt="hamburger menu" onClick={dropdownHandler}/>
            {isDropdown && (
                <div className="dropdown-menu">
                    {<ul>
                        <li>ooo님, 안녕하세요!</li>
                        <li><img src='product.png' alt='icon'/> 상품리스트 페이지</li>
                        <li><img src='bookmark.png' alt='icon'/> 북마크 페이지</li>
                    </ul>
                    }
                </div>
            )}
        </header>
    </Router>
    );
}

