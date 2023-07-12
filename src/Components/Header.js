import React from "react"
import './Header.css'

export default function Header () {
    
    return (
        <header className="header_container">
            <div className="header_logo">
                <img src="logo.png"/>
                <span className="header_font">COZ Shopping</span>
            </div>
            <div className="header_icon">
                <img src="hamburger.png"/>
            </div>
        </header>
    )
}