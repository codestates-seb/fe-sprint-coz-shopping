
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/mainPage/header';
import Footer from './components/mainPage/footer'
import MainProductList from './components/mainPage/mainProductsList';
 



function App() {
  const [data, setData] = useState([])


  useEffect(()=>{
    axios.get('http://cozshopping.codestates-seb.link/api/v1/products?count=10')
      .then((res)=>{
        setData(res.data)
      })
    
  },[])

  console.log(data)




  return (
    <div className="App">
      <div>
      <Header></Header>
      <MainProductList item = {data}></MainProductList>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;









//git clone 을 통해서 로컬과 git을 연결. 
//



//git push를 해야 github에서 새로 만든 branch가 보이게 된다
// push를 하지 않으면 github에 보이지 않는다.
// 첫번째 git commit을 해야 main브랜치에서 branch로 분리가 된다. 


//질문 1. 꼭 git clone를 하고 브랜치를 만들어야하나요? 아니면 브랜치를 만들고 git clone 해도되나요? 

//질문 2. 새로 생성한 브랜치에서 작업이 끝난후에 push까지 끝났는데, push를 취소할수 있나요? push하기 전으로 돌아갈수 있나요?  (marge하기전)



