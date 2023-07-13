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
            <img src="icon.png" alt="hamburger menu" className="dropdown-icon" onClick={dropdownHandler}/>
            {isDropdown && (
                <div className="dropdown-container">
                    <div className="triangle"></div>
                    <div className="dropdown-menu">
                        {<ul>
                            <li>ooo님, 안녕하세요!</li>
                            <li>
                                <Link to='/product'>
                                    <div className="dropdown-list">
                                    <img src='product.png' alt='icon'/>상품리스트 페이지</div>
                                </Link>
                            </li>
                            <li>
                                <Link to='/bookmark'>
                                <div className="dropdown-list">
                                    <img src='bookmark.png' alt='icon'/>북마크 페이지</div>
                                </Link>
                            </li>
                        </ul>
                        }
                    </div>
                </div>
            )}
        </header>
    </Router>
    );
}

