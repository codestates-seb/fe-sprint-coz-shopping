import styled from 'styled-components';
import bookmarkOff from "../assets/bookmark-off.png";
import bookmarkOn from "../assets/bookmark-on.png";

export default function Item({ data }) {
    return (
        <ProductItemContainer>
            <ProductImgContainer>
                <ProductImg src={data.type === "Brand" ? data.brand_image_url : data.image_url} />
                <BookmarkStar src={bookmarkOff} />
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
    )
}


// styled-components
const ProductItemContainer = styled.li`
    width: 16.5rem;
    list-style: none;
`

const ProductImgContainer = styled.span`
    position: relative;
`

const ProductImg = styled.img`
    width: 16.5rem;
    height: 13.125rem;
    border-radius: 12px;
    object-fit: cover;
`

const BookmarkStar = styled.img`
    width: 1.8rem;
    height: 1.8rem;
    position: absolute;
    bottom: 0.75rem;
    right: 0.75rem;
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