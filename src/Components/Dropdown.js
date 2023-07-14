import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift,faStar } from "@fortawesome/free-solid-svg-icons";
import './Dropdown.css'
import { Link } from "react-router-dom";

export default function Dropdown () {

    return (
        <div className="dropDown_container">
            <li className="dropDown_List">OOO님, 안녕하세요</li>
            <li className="dropDown_List">
                <Link to="/products/list">
                <FontAwesomeIcon icon={faGift} className="dropDown_icon" />
                <span className="page_name">상품리스트 페이지</span>
                </Link>
            </li>
            <li className="dropDown_List">
                <Link to="/bookmark">
                <FontAwesomeIcon icon={faStar} className="dropDown_icon"/>
                북마크 페이지
                </Link>
            </li>
        </div>
    )
}