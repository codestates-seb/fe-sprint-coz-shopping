import React from "react";
// import { useNavigate } from "react-router-dom";
import ProductItem from "./ProductItem";
import BookmarkItem from "./BookmarkItem";

const BookmarkList = ({ bookmarkList }) => {
  return (
    <section>
      <div className="BookmarkList">
        <div className="text">북마크 리스트</div>
        <div>
          <BookmarkItem />
        </div>
      </div>
    </section>
  );
};

export default BookmarkList;
