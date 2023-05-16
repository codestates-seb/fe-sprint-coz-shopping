import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  // const [bookmark, setBookmark] = useState([]);

  const getData = async () => {
    const json = await (
      await fetch(`http://cozshopping.codestates-seb.link/api/v1/products`)
    ).json();

    setProducts(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
