import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/Product";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="main__list">
        <div className="main__title">상품 리스트</div>
        <List />
      </div>
      <div className="main__list">
        <div className="main__title">북마크</div>
        <List />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
