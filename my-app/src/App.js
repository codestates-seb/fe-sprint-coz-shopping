import "./base.css";
import Main from "./page/MainPage"
import ShopItemList from "./page/ShoppingListPage"
import BookMarker from "./page/BookMarkerPage"
import Footer from "./componunt/Footer"
import Header from "./componunt/Header";
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/shopitemlist" element={<ShopItemList/>}/>
        <Route path="/bookmarker" element={<BookMarker/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
