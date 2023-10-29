import React, { useState } from 'react'
import "../components/CartItems.css"
import { useSelector } from 'react-redux/es/hooks/useSelector'
import CartCard from './CartCard'
import { useDispatch } from 'react-redux'
import { clearCart,formshow} from '../Utils/cartSlice'
import SearchCartCard from './SearchCartCard'
import Checkoutform from './Checkoutform'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { myordersfunction } from '../Utils/cartSlice'


const CartItems = () => {

    const cartItems = useSelector(store => store.cart.items)
    const price = useSelector(store => store.cart.price)
    const searchcartitems = useSelector(store => store.cart.searchItems)
    const show = useSelector(store => store.cart.formState)
    const dispatch = useDispatch()
  
    const clear = () =>{
        dispatch(clearCart())
    }
    
     if(price === 0){
      dispatch(formshow(false))
     }

    const checkoutbtn = () =>{
      if(show === false){
        dispatch(formshow(true))
      }
      else{
        dispatch(formshow(false))
      }
    }

  return (
    <div className='cart'>
      {cartItems.length || searchcartitems.length ? 
      <div className='clear-cart'>
      <div className='left-cart'>
      <h2> Totla Price- ₹{price}</h2>
      </div>
      <div className='right'>
      
      <Button variant="outlined" color="error" onClick={clear}>
      Clear Cart
      </Button>
      <Button variant="contained" color="success" onClick={checkoutbtn}>
        Check Out
      </Button>
      </div>
      </div>
       :null}
       {cartItems.length || searchcartitems.length ?    <div className='line'></div>:null}
       {show && (cartItems.length || searchcartitems.length) ?      <Checkoutform/> : null}
     
      {
        cartItems.length || searchcartitems.length  ?
      
           <div className='item-card'>
        {
           cartItems.map((value)=>(
              <div key={value?.card?.info?.id} >
              <CartCard title={value?.card?.info?.name} image={value?.card?.info?.imageId} information={value} />
              </div>
          ))
        }
         {
           searchcartitems.map((value)=>(
              <div key={value?.card?.card?.info?.id} >
              <SearchCartCard title={value?.card?.card?.info?.name} image={value?.card?.card?.info?.imageId} information={value} />
              </div>
          ))
        }
           
      
       
      </div>:<div className='empty'>
        <h1>CART IS EMPTY</h1>
        <a href='/'> <button className='back'>BACK to HOME</button></a>
        </div>
      }
      
     
    </div>
  )
}

export default CartItems
