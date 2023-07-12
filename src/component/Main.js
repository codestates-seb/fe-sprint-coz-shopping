import { Link } from "react-router-dom"
import Bookmark from './../pages/Bookmark'
import ProductList from './../pages/ProductList'

import { data } from './../data/data.js'

export default function Main({ isProduct, isBookmark }) {

    return (
        <div className="main">
            <div className="container">
                <Link to="/product"><button className="listBtn" >상품리스트</button></Link>
                <ProductList isProduct={isProduct} />
                <Link to="/bookmark"><button className="listBtn" >북마크리스트</button></Link>
                <Bookmark isBookmark={isBookmark} />
            </div>
        </div>
    )
}