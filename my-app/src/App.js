import Header from "./componunt/Header";
import "./base.css";
import Main from "./page/MainPage"
import Footer from "./componunt/Footer"
import axios from "axios"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios.get('http://cozshopping.codestates-seb.link/api/v1/products')
      .then(res => {
        // 받아온 데이터 처리
        const filteredData = res.data.filter(item => item.id === 5);
        console.log(filteredData);
      })
      .catch(error => {
        // 에러 처리
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
