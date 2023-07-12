import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./page/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./page/Product";
import Bookmark from "./page/Bookmark";

function App() {
  return (
    <Router>
      <div className="component_container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/list" element={<Product />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
