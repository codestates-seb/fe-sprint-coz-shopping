import React from "react";
import logo from "../images/메인로고.png";
import hamburger from "../images/햄버거.png";
import styled from "styled-components";
import Modal from "./Modal";
import {useState} from "react";
import '../App.css'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);

  div#nav-body {
    width: 1280px;
    display: flex;
    justify-content: space-between;
    margin: auto;

  }

  

   h1 {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    /* padding: 0rem 8rem; */
  }

   .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 2rem;
  }

   

   button {
    border: none;
    background-color: white;
    cursor: pointer;
  }

  

`



function Header(){

    const [isOpen , setIsOpen] = useState(false);
    const openModalHandler = () => {
        isOpen === true?setIsOpen(false):setIsOpen(true);
    }


    return (
        <>
        <HeaderContainer>
        <div id="nav-body">
            <h1>
                <img className="logo" src={logo} alt="logo"/>
                <button>
                    <span>COZ Shopping</span>
                </button>
            </h1>
            
            <button onClick={openModalHandler}>
                    <img src={hamburger} alt="햄버거아이콘"/>
            </button>
            
            
        </div>
        </HeaderContainer>

        <div className="alignbox">
            {isOpen ? <Modal/>:null}
        </div>
        </>
    )
}

export default Header