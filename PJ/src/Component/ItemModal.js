import styled from 'styled-components';
import BookmarkIcon from './BookmarkIcon';
import modalCloseBtn from '../img/modal-close.png'

export default function ItemModal({ data, modalPopUp, bookmarkList, setBookmarkList, isBookmarked }) {
    function stopEvent(e) {
        e.stopPropagation();
    }

    return (
        <ModalBackground onClick={modalPopUp}>
            <ModalScreen onClick={(e) => stopEvent(e)}>
                <ModalCloseBtn src={modalCloseBtn} onClick={modalPopUp}></ModalCloseBtn>
                <ItemModalImg src={data.type === "Brand" ? data.brand_image_url : data.image_url} />
                <BookmarkBox>
                    <BookmarkIcon
                    data={data} 
                    bookmarkList={bookmarkList} 
                    setBookmarkList={setBookmarkList} 
                    isBookmarked={bookmarkList.some(item => item.id === data.id)} 
                    />
                    <ModalTitle>{data.type === "Category" ? `# ${data.title}` : data.type === "Brand" ? `${data.brand_name}` : `${data.title}`}</ModalTitle>
                </BookmarkBox>
            </ModalScreen>
        </ModalBackground>
    )
}


// styled-components
const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    background-color: rgba(255, 255, 255, 0.4);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalCloseBtn = styled.img`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
`

const ModalScreen = styled.div`
    position: relative;
`

const ItemModalImg = styled.img`
    width: 46.5rem;
    height: 30rem;
    border-radius: 15px;
    object-fit: cover;
`

const BookmarkBox = styled.div`
    height: 1.875rem;
    position: absolute;
    left: 1.5rem;
    bottom: 1.5rem;
    display: flex;
    align-items: center;
`

const ModalTitle = styled.span`
    color: white;
    font-size: 24px;
    font-weight: 700;
    margin-left: 0.5rem;
`