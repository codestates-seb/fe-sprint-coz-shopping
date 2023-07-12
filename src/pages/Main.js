import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import Headers from "../component/Headers";
import Footers from "../component/Footers";
import axios from "axios";

// 아티클
const Article = styled.article`
    display : flex;
    flex-direction: column;
    align-items: center;
    > .section {
        width: 100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        > h2 {
            width: 70%;
            display: flex;
            justify-content: flex-start;
            font-size: 24px;
            font-weight: 600;
             margin: 25px
            }  
        > ul {
            width: 70%;
            height:300px;
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            padding:0;
            z-index:1;
            > li{
                width: 300px;
                height: 300px;
                list-style-type: none;
                display:flex;
                flex-direction: column;
                z-index:2;
                > .listImgWrap {
                        box-sizing:border-box;
                        width: 300px;
                        height: 242px;
                        position:relative;
                        border-radius:12px;
                        border: 1px solid #0000001A;
                        z-index: 3;
                        overflow:hidden;
                    > .titleImg{
                        width:100%;
                        height:100%;
                        z-index:3;
                    }
                    > .starImg {
                        width:24px;
                        height:24px;
                        position:absolute;
                        bottom:10px;
                        right:10px;
                        cursor: pointer;
                        z-index:4;
                    }
                }
                > .listTextWrap {
                    margin : 10px 0;
                }
            }
        }
    }
    

`


const Main = () => {
    const [connectApi, setconnectApi] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://cozshopping.codestates-seb.link/api/v1/products", {
                    params: {
                        count: 4,
                    },
                });
                const apiItems = response.data
                setconnectApi(apiItems);
                console.log(apiItems);
                console.log(connectApi);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);



    return (
        <>
            {/* 헤더 */}
            <Headers />

            {/* 아티클 */}
            <Article>
                {/* 상품 리스트 */}
                <section className="section">
                    <h2>상품 리스트</h2>
                    <ul>

                        <li>
                            <div className="listImgWrap">
                                {connectApi && <img className="titleImg" src={connectApi[0].image_url} alt="" />}
                                <img className="starImg" src="/images/star.png" alt="" />
                            </div>
                            <div className="listTextWrap">
                                <strong>애플워치 스트랩</strong>
                                <strong>15%</strong>
                                <span>색깔별 음식 모음전</span>
                                <span>12,900원</span>
                            </div>
                        </li>
                        <li>
                            <div className="listImgWrap">
                                {connectApi && <img className="titleImg" src={connectApi[1].image_url} alt="" />}
                                <img className="starImg" src="/images/star.png" alt="" />
                            </div>
                            <div className="listTextWrap">
                                <strong>애플워치 스트랩</strong>
                                <strong>15%</strong>
                                <span>색깔별 음식 모음전</span>
                                <span>12,900원</span>
                            </div>
                        </li>
                        <li>
                            <div className="listImgWrap">
                                {connectApi && <img className="titleImg" src={connectApi[2].image_url} alt="" />}
                                <img className="starImg" src="/images/star.png" alt="" />
                            </div>
                            <div className="listTextWrap">
                                <strong>애플워치 스트랩</strong>
                                <strong>15%</strong>
                                <span>색깔별 음식 모음전</span>
                                <span>12,900원</span>
                            </div>
                        </li>
                        <li>
                            <div className="listImgWrap">
                                {connectApi && <img className="titleImg" src={connectApi[3].image_url} alt="" />}
                                <img className="starImg" src="/images/star.png" alt="" />
                            </div>
                            <div className="listTextWrap">
                                <strong>애플워치 스트랩</strong>
                                <strong>15%</strong>
                                <span>색깔별 음식 모음전</span>
                                <span>12,900원</span>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* 북마크 리스트 */}
                <section className="section">
                    <h2>북마크 리스트</h2>
                    <ul>

                        <li>
                            <div className="listImgWrap">
                                {connectApi && <img className="titleImg" src={connectApi[0].image_url} alt="" />}
                                <img className="starImg" src="/images/star.png" alt="" />
                            </div>
                            <div className="listTextWrap">
                                <strong>애플워치 스트랩</strong>
                                <strong>15%</strong>
                                <span>색깔별 음식 모음전</span>
                                <span>12,900원</span>
                            </div>
                        </li>
                        <li>
                            <div className="listImgWrap">
                                {connectApi && <img className="titleImg" src={connectApi[1].image_url} alt="" />}
                                <img className="starImg" src="/images/star.png" alt="" />
                            </div>
                            <div className="listTextWrap">
                                <strong>애플워치 스트랩</strong>
                                <strong>15%</strong>
                                <span>색깔별 음식 모음전</span>
                                <span>12,900원</span>
                            </div>
                        </li>
                        <li>
                            <div className="listImgWrap">
                                {connectApi && <img className="titleImg" src={connectApi[2].image_url} alt="" />}
                                <img className="starImg" src="/images/star.png" alt="" />
                            </div>
                            <div className="listTextWrap">
                                <strong>애플워치 스트랩</strong>
                                <strong>15%</strong>
                                <span>색깔별 음식 모음전</span>
                                <span>12,900원</span>
                            </div>
                        </li>
                        <li>
                            <div className="listImgWrap">
                                {connectApi && <img className="titleImg" src={connectApi[3].image_url} alt="" />}
                                <img className="starImg" src="/images/star.png" alt="" />
                            </div>
                            <div className="listTextWrap">
                                <strong>애플워치 스트랩</strong>
                                <strong>15%</strong>
                                <span>색깔별 음식 모음전</span>
                                <span>12,900원</span>
                            </div>
                        </li>
                    </ul>
                </section>

            </Article >

            {/* 푸터 */}
            < Footers />
        </>

    );
};

export default Main;