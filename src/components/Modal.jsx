import React from "react";
import { styled } from "styled-components";
import { useEffect } from "react";
const StyleModal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.4);
  z-index: 8;
  color: white;
  .modal-item {
    background-size: cover;
    background-position: center;
    border-radius: 12px;
    width: 744px;
    height: 480px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .modal-close-button {
    position: absolute;
    right: 24px;
    top: 24px;
    background-color: transparent;
  }
  .star {
    cursor: pointer;
  }
  .description {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 24px;
    font-weight: 700;
    position: absolute;
    bottom: 24px;
    left: 24px;
  }
  .description span {
    font: 30px;
  }
`;

export default function Modal({ item, modalHandler, bookMarkHandler }) {
  const { brand_image_url, image_url, checked, title, brand_name, type } = item;
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <StyleModal onClick={() => modalHandler(undefined)}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-item"
        style={{
          backgroundImage: brand_image_url ? `url(${brand_image_url})` : `url(${image_url})`,
        }}
      >
        <button onClick={() => modalHandler(undefined)} className="modal-close-button">
          <img src="/images/modalClose.svg" alt="modal close button" />
        </button>
        <div className="description">
          <img
            onClick={() => bookMarkHandler(item)}
            className="star"
            src={checked ? "/images/checkedStar.svg" : "/images/uncheckedStar.svg"}
            alt="book mark"
          />
          <span>
            {type === "Category" ? "#" : ""} {title || brand_name}
          </span>
        </div>
      </div>
    </StyleModal>
  );
}
