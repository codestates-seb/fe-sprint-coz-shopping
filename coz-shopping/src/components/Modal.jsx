import React from 'react';
import { AiFillStar, AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

const ModalWrap = styled.section`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.4);
    z-index: 99;
`
const CustomModal = styled.div`
    width: 744px;
    height: 480px;
    border-radius: 12px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.1);

    >img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Bookmark = styled.div`
    position: absolute;
    left: 24px;
    bottom: 24px;
    display: flex;
    align-items: center;
`

const BookmarkBtn = styled.button`
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
`
const BookmarkTitle = styled.span`
    color: var(--color-white);
    font-size: var(--font-size-medium);
    font-weight: bold;
    margin-left: 8px;
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
`
const CloseBtn = styled.button`
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
    transition: 0.5s;

    :hover {
        transform: rotate(180deg);
    }
`


function Modal(props) {
    const { imgUrl, title, setModal } = props;
    const handleClose = () => {
        setModal(false);
    };

    return (
        <ModalWrap>
            <CustomModal>
                <img
                    src={imgUrl}
                    alt={title}
                />
                <Bookmark>
                    <BookmarkBtn>
                        <AiFillStar
                            color='rgba(223, 223, 223, 0.81)'
                            size='24
              '
                        />
                    </BookmarkBtn>
                    <BookmarkTitle>{title}</BookmarkTitle>
                </Bookmark>
                <CloseBtn onClick={handleClose}>
                    <AiOutlineClose
                        color='#FFF'
                        size='23'
                    />
                </CloseBtn>
            </CustomModal>
        </ModalWrap>
    );
}

export default Modal;