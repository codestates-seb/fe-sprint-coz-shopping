import Header from "../component/Header"
import Footer from "../component/Footer"

import "./Main.css"

import { useEffect, useState } from 'react';
import { getProducts } from '../api/api.js';




export default function Main() {

    // const [flightList, setFlightList] = useState([]);

    // useEffect(() => {
    //     getProducts()
    //         .then(data => { setFlightList(data); });
    //     }, []);
    //     useEffect(() => {
    //     console.log(flightList)
    //     }, [flightList])





    return (
        <div className="mainin">
            <Header></Header>
            <div id="maininin">
                <div className="listmain"><span>상품 리스트</span>
                    <ul className="mainul">
                        <li className="mainbox">
                            <img className="bookmarkonoff" src="/bookmarkoff.png" alt="" ></img>
                            <img className="productimage" src="" alt=""></img>
                            <div className="firsttext">상품이름,카테고리</div>
                            <div className="secondtext">돈</div>
                            <div className="thirdtext">할인</div>
                        </li>
                        <li className="mainbox">
                            <img className="bookmarkonoff" src="/bookmarkoff.png" alt="" ></img>
                            <img className="productimage" src="" alt=""></img>
                        </li>
                        <li className="mainbox">
                            <img className="bookmarkonoff" src="/bookmarkoff.png" alt="" ></img>
                            <img className="productimage" src="" alt=""></img>
                        </li>
                        <li className="mainbox">
                            <img className="bookmarkonoff" src="/bookmarkoff.png" alt="" ></img>
                            <img className="productimage" src="" alt=""></img>
                        </li>
                    </ul>
                </div>
                <div className="listmain"><span>북마크 리스트</span>
                <ul className="mainul">
                        <li className="mainbox">

                        </li>
                        <li className="mainbox">

                        </li>
                        <li className="mainbox">

                        </li>
                        <li className="mainbox">

                        </li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

