import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { React, useState } from 'react';
import './main.css';
import filledstar from '../img/filled_star.png'
import emptystar from '../img/empty_star.png'
export default function Main({data, bookmarked, setbookmarked}){
  let data_refined = data.filter((ele) => ele.image_url!==null && ele.type === 'Product' ).slice(0,4)
  let bookmarkdata_refined = data_refined.filter((ele) => bookmarked.includes(ele.id)).slice(0,4)
  function bookmarkadd(id){
    let tmp = bookmarked.slice()
    tmp.push(id)
    return setbookmarked(tmp)
  }
  function bookmarkdel(id){
    let tmp = bookmarked.filter((ele) => {
      return !(ele === id)
    }
      )
    return setbookmarked(tmp)
  }
  return (
    <div className='main_container'>
      <h2>상품 리스트</h2>
      <section className='main_product_list'>
        {data_refined.map((ele) => {
          return (
          <div className='main_content'>
            <img className='main_images' src={ele.image_url} alt={ele.title}></img>
            {(bookmarked.includes(ele.id)) ? 
            <img className='main_star' src={filledstar} onClick={()=> bookmarkdel(ele.id)}></img> : <img className="main_star" src={emptystar} onClick={()=> bookmarkadd(ele.id)}></img>}
            <div className='main_title'>
              <span className='main_name'>{ele.title}</span>
              <span>{ele.discountPercentage}%</span>
            </div>
            <span className='main_price'>{ele.price}원</span>
          </div>
          )
        })}
      </section>
      <h2>북마크 리스트</h2>
      <section className='main_product_list'>
        {bookmarkdata_refined.map((ele) => {
          return (
          <div className='main_content'>
            <img className='main_images' src={ele.image_url} alt={ele.title}></img>
            {(bookmarked.includes(ele.id)) ? 
            <img className='main_star' src={filledstar} onClick={()=> bookmarkdel(ele.id)}></img> : <img className="main_star" src={emptystar} onClick={()=> bookmarkadd(ele.id)}></img>}
            <div className='main_title'>
              <span className='main_name'>{ele.title}</span>
              <span>{ele.discountPercentage}%</span>
            </div>
            <span className='main_price'>{ele.price}원</span>
          </div>
          )
        })}
      </section>
    </div>
  )
}