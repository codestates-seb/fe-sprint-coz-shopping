import { toast } from "react-toastify";
import bookmarkOff from "../assets/bookmark-off.png";
import bookmarkOn from "../assets/bookmark-on.png";

export default function BookmarkIcon({ data, bookmarkList, setBookmarkList, isBookmarked}) {
    function handleBookmark(e, item) {
        e.stopPropagation();
        
        if (bookmarkList.includes(item)) {
            const filteredData = bookmarkList.filter(el => el.id !== item.id);
            setBookmarkList(filteredData);
            localStorage.setItem("bookmark", JSON.stringify(filteredData));
            toast("상품이 북마크에서 제거되었습니다.", {closeButton: false, icon: <img src={bookmarkOff} />});
        } else {
            setBookmarkList([...bookmarkList, item]);
            localStorage.setItem("bookmark", JSON.stringify([...bookmarkList, item]));
            toast("상품이 북마크에 추가되었습니다.", {closeButton: false, icon: <img src={bookmarkOn} />});
        }
    }

    return (
        <img src={isBookmarked ? bookmarkOn : bookmarkOff} onClick={(e) => handleBookmark(e, data)} alt={data.type === "Category" ? `# ${data.title}` : data.type === "Brand" ? `${data.brand_name}` : `${data.title}`} />
    );
}