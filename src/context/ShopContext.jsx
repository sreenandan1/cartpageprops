import React, { createContext, useState } from 'react'
import { Children } from 'react'
import axios from 'axios'

 export const SystemContext = createContext()

export const ShopContext = ({children}) => {


  const [api,setApi]=useState([]);

  const getdata=async()=>{
      try {
          const response =await axios.get("http://localhost:3008/data");
          setApi(response.data); 
      } catch (error) {
          console.log(error);
      }
  };


    const data='sdhvdshv'
 const [cart,setCart]=useState([])

 const addToCart=(item)=>{
  const isAlready=cart.some((cartItem)=>cartItem.id === item.id)
  if (!isAlready) {
    setCart([...cart,item])
    alert('added')
  }else(
    alert('error')
  )

};
 console.log('cart',cart);

const values ={
    addToCart,
    cart,
    addToCart,
    setCart,
    api,
    setApi,
    getdata
}

  return (
   <SystemContext.Provider value={values}>
   {children}
   </SystemContext.Provider>
  )
}

export default ShopContext
