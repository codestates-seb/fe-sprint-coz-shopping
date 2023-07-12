import React from "react";
import styled from "styled-components";
import '../App.css';
import Itemrender from "../components/Itemrender";
import { useState, useEffect } from "react";
import axios from "axios";
import Bookmarkrender from "../components/Bookmarkrender";

const Itemlistalignment = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  padding-right: 10vw;
  padding-left: 10vw;

  img {
    border-radius: 12px;
  }
`;

function MainPage() {
  const [products, setProducts] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    // Fetch products
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });

    // Fetch bookmarks
    axios.get("/api/bookmarks").then((response) => {
      setBookmarks(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <Itemlistalignment>
        <Itemrender products={products} />
        <Bookmarkrender bookmarks={bookmarks} />
      </Itemlistalignment>
      <Footer />
    </div>
  );
}

export default MainPage;
