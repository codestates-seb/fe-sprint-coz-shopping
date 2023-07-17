import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'

function Item({el}) {
    const [isMarked, setIsMarked] = useState(false);

    const handleSetIsMarked = () => {
        if (el.bookmark === undefined) {
            el.bookmark = true;
        } else {
            el.bookmark = !el.bookmark;
        }
        setIsMarked(!isMarked);
    }

    return (
        <div key={el.id} className="item--container">
            <div className="img--container">
                <div className="img--wraper">
                    <img
                        className="item--image"
                        src={el.image_url !== null
                            ? el.image_url
                            : el.brand_image_url}
                        alt={el.title !== null
                            ? el.title
                            : el.brand_name}></img>
                    <div className="text-container">{
                            el.bookmark
                                ? <FontAwesomeIcon
                                        icon={faStar}
                                        onClick={() => handleSetIsMarked()}
                                        style={{
                                            color: "#ffe438",
                                            cursor: "pointer"
                                        }}/>
                                : <FontAwesomeIcon
                                        icon={faStar}
                                        onClick={() => handleSetIsMarked()}
                                        style={{
                                            color: "#ffffff",
                                            cursor: "pointer"
                                        }}/>
                        }
                    </div>
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