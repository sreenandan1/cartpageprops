import React, { useContext } from 'react'
import { SystemContext } from '../context/ShopContext'

function Cart() {
const {data,cart,setCart}=useContext(SystemContext)

const removeFromCart = (itemId)=>{
    const upadtedCart = cart.filter((item)=>item.id !== itemId)
    setCart(upadtedCart)
}

  return (
    <div>
    <div className='category'>
   {cart.map((item)=>(
    <div>
        <div >
            <div className='box'>
        <img className="img" src={item.Image}/>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <button onClick={()=>removeFromCart(item.id)}>Remove</button> 
        
        </div>

</div>
    </div>
   ))}

    </div>

    </div>
  )
}

export default Cart