export default function List( {obj} ) {
    return (
        <li className="List">
            <img className="Listimg" src={`${obj.brand_image_url ? obj.brand_image_url : obj.image_url}`} alt="" />
            <div className="content">
                <span className="name">{obj.brand_name ? obj.brand_name : obj.title}</span>
                <span className="per">{obj.discountPercentage ? `${obj.discountPercentage}%` : ``}</span>
            </div>
            <div className="content">
                <span className="discribe">{obj.sub_title ? obj.sub_title : ''}</span>
                <span className="price">{obj.price ? `${Number(obj.price).toLocaleString('ko-KR')}원` : ``}</span>
            </div>
        </li >
    )
}