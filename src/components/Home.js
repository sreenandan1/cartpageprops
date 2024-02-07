import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import './Home.css'
import { SystemContext } from '../context/ShopContext';
function Home() {

    const {data,addToCart,getdata,api} = useContext(SystemContext)
   
    useEffect(()=>{
        getdata();
    },[]);

    console.log('from contacts',data);
  return (
    <div className='category'>
   { api.map((item)=>(
    <div>
        <div >
            <div className='box'>
        <img className="img" src={item.Image}/>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <button onClick={()=>addToCart(item)}>Add to Cart</button> 
        
        </div>

</div>
    </div>
   ))}

    </div>
  )
}

export default Home