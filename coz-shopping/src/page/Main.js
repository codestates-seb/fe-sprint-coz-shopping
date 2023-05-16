import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/Product";
import "../page/Main.css";

const Main = () => {
  
  return (
    <div className="main">
      <Header />
      <div className="main__list">
        <h2 className="main__title">상품 리스트</h2>
        <List />
      </div>
      <div className="main__list">
        <h2 className="main__title">북마크</h2>
        <List />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
