import React, {useState} from "react";
import { Link } from "react-router-dom";

function Dropdown() {
    const [isDropdown, setDropdown] = useState(false);

    const handleDropdown = ()=>{
        setDropdown(!isDropdown);
    }
    return(
        <div id="dropdown--form">
            <img id='hamberger' src='../hamberger.png' alt='hamberger' onClick={()=>handleDropdown()}/>
                {isDropdown && (<section id="dropdown--container"><ul id="dropdown--box">
                    <li className="dropdown--list">ㅇㅇㅇ님 안녕하세요</li>
                    <Link to='/product/list'><li className="dropdown--list">
                        <img className="icon--img" src="../product.png" alt="bookmark"/> 상품리스트 페이지</li>
                    </Link>
                    <Link to='/bookmark' ><li className="dropdown--list">
                        <img className="icon--img" src="../bookmark.png" alt='product'/> 북마크 페이지</li>
                    </Link>
                </ul></section>)}
            
        </div>
    );
}

export default Dropdown