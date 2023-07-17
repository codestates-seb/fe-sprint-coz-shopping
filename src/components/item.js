import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Item({el}) {
    const [isMarked, setIsMarked] = useState(false);

    const handleSetIsMarked = () => {
        setIsMarked(!isMarked);
    }

    return (
        <div key={el.id} className="item--container">
            <div className="img--container">
                <div className="img--wraper">
                    <figure>
                        <img
                            className="item--image"
                            src={el.image_url !== null
                                ? el.image_url
                                : el.brand_image_url}
                            alt={el.title !== null
                                ? el.title
                                : el.brand_name}></img>
                        <figcaption className="text-container">
                            <FontAwesomeIcon icon="fa-regular fa-star"/><span/>어딨음?</figcaption>
                    </figure>
                </div>

            </div>
            <div className="item--info--container">
                <div className="title--container">
                    <div className="main--title">{
                            el.title !== null
                                ? el.title
                                : el.brand_name
                        }</div>
                    <div className="sub--title">
                        {
                            el.sub_title
                                ? el.sub_title
                                : ''
                        }</div>
                </div>
                <div className="sub--info--container">
                    {
                        el.discountPercentage
                            ? <p className="discount">
                                    {el.discountPercentage}%</p>
                            : <div className="sub--info1">{
                                        el.follower
                                            ? '관심있는 고객수'
                                            : ''
                                    }</div>
                    }
                    <div className="sub--info2">{
                            el.price
                                ? el.price + '원'
                                : (
                                    el.follower
                                        ? el.follower + '명'
                                        : ''
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;