import { Link } from "react-router-dom"
import List from '../component/List'

export default function Main({ isProduct, isBookmark }) {

    return (
        <div className="main">
            <div className="container">
                <Link to="/product"><button className="ListBtn" >상품리스트</button></Link>
                <ul className='ProductList'>
                    {isProduct ? isProduct.map((obj,idx) => { if (idx <= 3) { return <List key={idx} obj={obj} />} }) : ''}
                </ul>
                <Link to="/bookmark"><button className="ListBtn" >북마크리스트</button></Link>
                <ul className='BookmarkList'>
                    {isBookmark ? isBookmark.map((obj,idx) => { if (idx <= 3) { return <List key={idx} obj={obj} />} }) : ''}
                </ul>
            </div>
        </div>
    )
}

/*



*/