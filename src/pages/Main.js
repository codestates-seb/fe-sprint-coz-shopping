import styled from "styled-components";
import React, { useState } from 'react';

// 헤더
const HeaderWhap = styled.div`
    background: #FFF;
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.10);
    width:1280px;
    height:80px;
    display : flex;
    justify-content: space-between;
    align-items: center;
    margin:auto;
    > .headerLeft {
        margin-left:76px;
        display:flex;
        align-items: center;
        > .leftImg {
            width:55px;
            height:30px;
        }
        > .leftText {
            margin-left:12px;
            font-weight:700;
            font-size:32px;
            line-height:28.17px;
        }
    }
    > .headerRight { 
        margin-right:110px;
        > .rightImg {
            cursor: pointer;
        }
    }
`

// 모달 (시멘틱요소:nav)
const Modal = styled.nav`
    position:relative;
    width:200px;
    height:172px;
    top:0;
    right: 0;
    left: 75%;
    bottom:0;
    transform: translate(-50%, -18%);
    
    > .modalImg {
        > .modalArrow{ 
        position:absolute;
        left:130px;
        z-index:999;
    }
}
    > .modalWrap {
        position:absolute;
        top:18px;
        display: flex;
        width: 200px;
        height: 150px;
        flex-direction: column;
        align-items: flex-start;
        flex-shrink: 0;
        border-radius:12px;
        background: #FFF;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.10);
        > .modalText {
            display:flex;
            align-items: center;
            width:200px;
            height:50px;
            padding-left:12px;
            cursor: pointer;
            box-sizing:border-box;
            > .modalArrow {
                width:20px;
                height:20px;
                margin-right:8px;
            }
            > span {
                font-weight : 400;
                font-size:16px;
            }
        }
        > div:first-child {
            justify-content: center;
            padding:0;
        }
        > div:nth-child(2) {
            border-bottom : 0.5px solid rgba(0, 0, 0, 0.10);
            border-top : 0.5px solid rgba(0, 0, 0, 0.10);
        }
    }
`

// 아티클
const Article = styled.article`

    .articleWrap {
        height:694px;
    }

`

// 푸터
const Footer = styled.article`

    .footerWrap {
        height:58px;
        width:1280px;
        margin:auto;
        border-top:solid 1px black;
        display:flex;
        flex-direction: column;
        justify-content: center;
        > span {
            height:18px;
            font-size : 12px;
            color : #888888;
            display:flex;
            flex-direction: column;
            align-items: center;
        }
    }

`












const Main = () => {
    const [ModalOpen, setModalOpen] = useState(false);

    const menuClick = () => {
        setModalOpen(!ModalOpen);
    };

    return (
        <>
            <header>
                {/* 헤더 */}
                <HeaderWhap>
                    <div className="headerLeft">
                        <img className="leftImg" src="/images/logo.png" alt="코드스테이츠 로고" />
                        <h1 className="leftText">COZ Shopping</h1>
                    </div>
                    <div className="headerRight" onClick={menuClick}>
                        <img className="rightImg" src="/images/unnamed.png" alt="메뉴 버튼" />
                    </div>
                </HeaderWhap>

                {/* 모달 */}
                {ModalOpen && (
                    <Modal>
                        <div className="modalImg">
                            <img className="modalArrow" src="/images/polygon.png" alt="메뉴 버튼 오픈" />
                        </div>
                        <div className="modalWrap">
                            <div className="modalText">
                                <span>OOO님, 안녕하세요!</span>
                            </div>

                            <div className="modalText">
                                <img className="modalArrow" src="/images/gift.png" alt="상품 리스트 페이지" />
                                <span>상품리스트 페이지</span>
                            </div>

                            <div className="modalText">
                                <img className="modalArrow" src="/images/star.png" alt="북마크 페이지" />
                                <span>북마크 페이지</span>
                            </div>
                        </div>
                    </Modal>
                )}
            </header>

            <Article>
                <div className="articleWrap">

                </div>
            </Article>

            <Footer>
                <div className="footerWrap">
                    <span>개인정보 처리방침 | 이용 약관</span>
                    <span>All rights reserved @ Codestates</span>
                </div>
            </Footer>
        </>













    );
};

export default Main;