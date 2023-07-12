import styled from "styled-components";
import React, { useState } from 'react';
import Headers from "../component/Headers";
import Footers from "../component/Footers";

// 아티클
const Article = styled.article`

    .articleWrap {
        height:694px;
    }

`

const Bookmark = () => {

    return (
        <>
            {/* 헤더 */}
            <Headers />

            {/* 아티클 */}
            <Article>
                <div className="articleWrap">

                </div>
            </Article>


            {/* 푸터 */}
            <Footers />
        </>
    )
}

export default Bookmark;