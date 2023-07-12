import { useContext } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { MyContext } from "../App";
import Footer from "../components/Footer";
import BookmarkList from "../components/BookmarkList";
import BookmarkItem from "../components/BookmarkItem";
import ProductItem from "../components/ProductItem";
const Main = () => {
  const data = useContext(MyContext);
  const logo = <img src="../assets/logo.png" />;
  const logoName = <img src="../assets/logoName.png" />;
  const hamburgerButton = (
    <img src="../assets/hamburgerButton.png" onClick={() => {}} />
  );

  return (
    <div className="wrap">
      <Header
        logo={logo}
        logoName={logoName}
        menuBar={hamburgerButton}
      ></Header>
      <ProductList productList={ProductItem} />
      <BookmarkList bookmarkList={BookmarkItem} />
      <Footer className="footer" />
    </div>
  );
};

export default Main;
