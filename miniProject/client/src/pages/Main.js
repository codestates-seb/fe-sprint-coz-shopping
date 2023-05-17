import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'

function Main(){
    useEffect(()=>{
        axios.get('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
        .then((data)=>{
            console.log(data.data)
        })
        .catch(()=>{
            console.log('실패함')
        })

    },[])
}

export default Main;