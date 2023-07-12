import { useState } from "react";
import bookmarkOff from "../assets/bookmark-off.png";
import bookmarkOn from "../assets/bookmark-on.png";

export default function BookmarkIcon({ data }) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [bookmarkList, setBookmarkList] = useState([]);

    const storedData = JSON.parse(localStorage.getItem("bookmark"));

    function handleBookmark(item) {
        if (bookmarkList.includes(item) || storedData.includes(item)) {
            const filteredData = storedData.filter(el => el.id !== item.id);
            setBookmarkList(filteredData);
            localStorage.setItem("bookmark", JSON.stringify(filteredData));
        } else {
            setBookmarkList([...storedData, item]);
            localStorage.setItem("bookmark", JSON.stringify([...storedData, item]));
        }

        setIsBookmarked(!isBookmarked);
    }

    return (
        <div>{isBookmarked ? bookmarkOn : bookmarkOff}</div>
    );
}