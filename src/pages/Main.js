import React from "react";
import styled from 'styled-components';
import Header from "../components/Header";




const BackGroundColor = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aqua;
  text-align: center;
  padding-top: 50%;
`;

function Main() {


  return (
    <>
      <Header />
      <BackGroundColor>여기는 메인페이지</BackGroundColor>
    </>
    

  
  );
};








export default Main;