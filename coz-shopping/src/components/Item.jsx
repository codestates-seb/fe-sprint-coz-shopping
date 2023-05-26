import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import Modal from './Modal';
import styled from 'styled-components';

const Item = styled.li`
    display: flex;
    flex-direction: column;
    max-width: 264px;
    margin: 12px 24px 12px 0;

    :nth-child(4n) {
        margin-left: 0;
    }

    > a {
        display: block;
    }
`

const ItemImg = styled.div`
    position: relative;
    width: 264px;
    height: 210px;
    margin-bottom: 6px;
    border-radius: 12px;
    overflow: hidden;

    >img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    >button {
        position: absolute;
        right: 12px;
        bottom: 12px;
        cursor: pointer;
    }
`

const ItemDetail = styled.div`
    display: flex;
    justify-content: space-between;

    >.title {
        font-weight: bold;
        font-size: 1rem;
    }
`

const ItemInfo = styled.div`
    text-align: right;

    >.discount-percent {
        color: red;
    }
`




function Product(props) {
    const {
        id,
        type,
        title,
        sub_title,
        brand_name,
        price,
        discountPercentage,
        image_url,
        brand_image_url,
        follower,
    } = props;
    const formattedPrice = price
        ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        : '';
    const formattedFollower = follower
        ? follower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        : '';

    const [modal, setModal] = useState(false);
    const handleModalOpen = () => {
        setModal(true);
    };

    let productDisplay;
    switch (type) {
        case 'Product':
            productDisplay = (
                <>
                    <Item key={id} onClick={handleModalOpen}>
                        <ItemImg>
                            <img src={image_url} alt={title} />
                            <button>
                                <AiFillStar
                                    color='rgba(223, 223, 223, 0.81)'
                                    size='24'
                                />
                            </button>
                        </ItemImg>
                        <ItemDetail>
                            <div className='title'>
                                <h3>{title}</h3>
                            </div>
                            <ItemInfo>
                                <div className="discount-percent">
                                    {discountPercentage}%</div>
                                <div>{formattedPrice}원</div>
                            </ItemInfo>
                        </ItemDetail>
                    </Item>
                    {modal && (
                        <Modal
                            title={title}
                            imgUrl={image_url}
                            setModal={setModal}
                        />
                    )}
                </>
            );
            break;
        case 'Category':
            productDisplay = (
                <>
                    <Item
                        key={id}
                        onClick={handleModalOpen}
                    >
                        <ItemImg>
                            <img src={image_url} alt={title} />
                            <button>
                                <AiFillStar
                                    color='rgba(223, 223, 223, 0.81)'
                                    size='24'
                                />
                            </button>
                        </ItemImg>
                        <ItemDetail>
                            <div className="title">
                                <h3># {title}</h3>
                            </div>
                        </ItemDetail>
                    </Item>
                    {modal && (
                        <Modal
                            title={title}
                            imgUrl={image_url}
                            setModal={setModal}
                        />
                    )}
                </>
            );
            break;
        case 'Exhibition':
            productDisplay = (
                <>
                    <Item
                        key={id}
                        onClick={handleModalOpen}
                    >
                        <div>
                            <ItemImg>
                                <img
                                    src={image_url}
                                    alt={title}
                                />
                                <button>
                                    <AiFillStar
                                        color='rgba(223, 223, 223, 0.81)'
                                        size='24'
                                    />
                                </button>
                            </ItemImg>
                            <ItemDetail>
                                <div className="title">
                                    <h3>{title}</h3>
                                    <div>{sub_title}</div>
                                </div>
                            </ItemDetail>
                        </div>
                    </Item>
                    {modal && (
                        <Modal
                            title={title}
                            imgUrl={image_url}
                            setModal={setModal}
                        />
                    )}
                </>
            );
            break;
        case 'Brand':
            productDisplay = (
                <>
                    {' '}
                    <Item
                        key={id}
                        onClick={handleModalOpen}
                    >
                        <ItemImg>
                            <img
                                src={brand_image_url}
                                alt={brand_name}
                            />
                            <button>
                                <AiFillStar
                                    color='rgba(223, 223, 223, 0.81)'
                                    size='24'
                                />
                            </button>
                        </ItemImg>
                        <ItemDetail>
                            <div className="title">
                                <h3>{brand_name}</h3>
                            </div>
                            <ItemInfo>
                                <div>관심고객수</div>
                                <div>{formattedFollower}명</div>
                            </ItemInfo>
                        </ItemDetail>
                    </Item>
                    {modal && (
                        <Modal
                            title={brand_name}
                            imgUrl={brand_image_url}
                            setModal={setModal}
                        />
                    )}
                </>
            );
            break;
        default:
            return null;
    }
    return productDisplay;
}

export default Product;