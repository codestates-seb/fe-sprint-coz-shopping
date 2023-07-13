import { useState } from 'react';
import styled from 'styled-components';
import BookmarkIcon from './BookmarkIcon';
import ItemModal from './ItemModal';

export default function Item({ data, bookmarkList, setBookmarkList }) {
    const [isModal, setIsModal] = useState(false);

    function modalPopUp() {
        setIsModal(!isModal);
    }

    return (
        <>
            {isModal ? 
                <ItemModal 
                    data={data} 
                    modalPopUp={modalPopUp}
                    bookmarkList={bookmarkList} 
                    setBookmarkList={setBookmarkList} 
                    isBookmarked={bookmarkList.some(item => item.id === data.id)}  
                /> : null}
            <ProductItemContainer onClick={modalPopUp}>
                <ProductImgContainer>
                    <ProductImg src={data.type === "Brand" ? data.brand_image_url : data.image_url} />
                    <BookmarkBox>
                        <BookmarkIcon 
                            data={data} 
                            bookmarkList={bookmarkList} 
                            setBookmarkList={setBookmarkList} 
                            isBookmarked={bookmarkList.some(item => item.id === data.id)} 
                        />
                    </BookmarkBox>
                </ProductImgContainer>
                <div>
                    <ProductContent>
                        <ProductTitle>{data.type === "Category" ? `# ${data.title}` : data.type === "Brand" ? `${data.brand_name}` : `${data.title}`}</ProductTitle>
                        {data.type === "Product" ? <ProductDiscount>{data.discountPercentage} %</ProductDiscount> : data.type === "Brand" ? <ProductTitle>관심고객수</ProductTitle> : null}
                    </ProductContent>
                    <ProductContent>
                        <ProductSubtitle>{data.type === "Exibition" ? `${data.sub_title}` : null}</ProductSubtitle>
                        <ProductNum>{data.type === "Product" ? `${Number(data.price).toLocaleString()} 원` : data.type === "Brand" ? `${Number(data.follower).toLocaleString()} 명` : null}</ProductNum>
                    </ProductContent>
                </div>
            </ProductItemContainer>
        </>
    )
}


// styled-components
const ProductItemContainer = styled.li`
    width: 16.5rem;
    list-style: none;
`

const ProductImgContainer = styled.div`
    position: relative;
    margin-bottom: 0.375rem;
`

const ProductImg = styled.img`
    width: 16.5rem;
    height: 13.125rem;
    border-radius: 12px;
    object-fit: cover;
`

const ProductContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ProductTitle = styled.div`
    font-weight: 800;
    font-size: 16px;
`

const ProductDiscount = styled(ProductTitle)`
    color: #452CDD;
`

const ProductSubtitle = styled.div`
    font-weight: 400;
    font-size: 16px;
`

const ProductNum = styled.div`
    font-weight: 500;
    font-size: 16px;
`

const BookmarkBox = styled.div`
    position: absolute;
    width: 1.9rem;
    height: 1.9rem;
    right: 0.55rem;
    bottom: 0.7rem;
`