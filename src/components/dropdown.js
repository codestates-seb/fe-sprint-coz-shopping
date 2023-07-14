import { Link } from 'react-router-dom';
import ProductListPage from '../pages/productListPage';
import BookmarkListPage from '../pages/bookmarkListPage';
import './dropdown.css';

export default function Dropdown () {
    return (
        <section>
            <div className='dropdown_container'>
                <div className="dropdown_greeting">
                    김우주님, 안녕하세요!
                </div>
                <div className="dropdown_item">
                    <Link to="/productList" element={<ProductListPage />}><img className='dropdown_icon' src="dropdown_product_icon.png" alt="dropdown_product_icon" />상품리스트 페이지</Link>
                </div>
                <div className="dropdown_item">
                    <Link to="/bookmarkList" element={<BookmarkListPage />}><img className='dropdown_icon' src="dropdown_bookmark_icon.png" alt="dropdown_bookmark_icon" />북마크 페이지</Link>
                </div>
            </div>
        </section>
    )
}