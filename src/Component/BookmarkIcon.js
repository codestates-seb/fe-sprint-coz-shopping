import bookmarkOff from "../assets/bookmark-off.png";
import bookmarkOn from "../assets/bookmark-on.png";
import styled from 'styled-components';

export default function BookmarkIcon({ data, bookmarkList, setBookmarkList, isBookmarked }) {
    function handleBookmark(item) {
        if (bookmarkList.includes(item)) {
            const filteredData = bookmarkList.filter(el => el.id !== item.id);
            setBookmarkList(filteredData);
            localStorage.setItem("bookmark", JSON.stringify(filteredData));
        } else {
            setBookmarkList([...bookmarkList, item]);
            localStorage.setItem("bookmark", JSON.stringify([...bookmarkList, item]));
        }
    }

    return (
        <BookmarkStartIcon src={isBookmarked ? bookmarkOn : bookmarkOff} onClick={() => handleBookmark(data)}/>
    );
}


// styled-components
const BookmarkStartIcon = styled.img`
    position: absolute;
    width: 1.9rem;
    height: 1.9rem;
    right: 0.55rem;
    bottom: 0.7rem;
`