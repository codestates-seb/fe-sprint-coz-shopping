import "./MainPage.css"
import axios from "axios"
import { useEffect, useState } from "react";

function Main() {
  const [listedData, setlistedData] = useState([]);

  useEffect(() => {
    axios.get('http://cozshopping.codestates-seb.link/api/v1/products')
      .then(res => {
        // 받아온 데이터 처리
        setlistedData(res.data);
      })
      .catch(error => {
        // 에러 처리
        console.error(error);
      });
  }, []);

  return (
    <main className="main-container">
      <div>
        <p>상품 리스트</p>
        <ul>
          {listedData.slice(0,5).map(item => (
            <li key={item.id}>
              <img src={item.image_url} alt={item.title} />
              {item.title}</li>
          ))}
        </ul>
      </div>

      <div>
        <p>북마크 리스트</p>
      </div>
    </main>
  );
}

export default Main;