import React from 'react'
import './Header.css'
import { useState } from 'react'
import { Link } from "react-router-dom";
import Menu from './Menu';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSide = () => {
        setIsOpen(!isOpen)
    }

    return(
        <header className='header-container'>
            <div className='logo-title'>
                <Link to='/'>
                    <img src="headerlogo1.png" alt="logo" />
                </Link>
                <span className='logo-title'>COZ Shopping</span>
            </div>
                <img src="hamburger.png" alt="hamburger menu" onClick={toggleSide}/>
                {isOpen && <Menu/>}
        </header>
    );
}
{/* <header >
            <div className='header-container'>
                <div className='logo-title'>
                    <Link to='/'>
                        <img src="headerlogo1.png" alt="logo" />
                    </Link>
                    <span className='logo-title'>COZ Shopping</span>
                </div>
                    <img src="hamburger.png" alt="hamburger menu" onClick={toggleSide}/>
            </div>
                {isOpen && <Menu/>}
        </header> */}