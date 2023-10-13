import React from 'react'
import "../components/CartItems.css"
import { img_url } from './Contants'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem,incrementCounter,decrementCounter } from '../Utils/cartSlice'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';



const CartCard = ({title,image,information}) => {

    const dispatch = useDispatch()
    const counter = useSelector((store) => store.cart.counter[information.card.info.id] || 1)

    const removeElement = (value) =>{
  
      dispatch(removeItem(value.card.info.id))
   
    }

    const decrement = (information) =>{
     dispatch(decrementCounter({ itemId: information.card.info.id,itemPrice:information.card.info.price}));
     }
        
    const increment = (information) =>{
    
      dispatch(incrementCounter({ itemId: information.card.info.id,
        itemPrice:information.card.info.price}));
    
    }

    
  return (
    <div className='cart-card'>
        <img src={img_url + image} className='cart-img'/>
      <p>{title}</p>
     
      <IconButton aria-label="delete" size="large" onClick={()=>removeElement(information)}>
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      <Button variant="outlined" color="error" onClick={()=>decrement(information)} style={{height:"30px", width:"0px"}}>
        -
      </Button>
      {counter}

      <Button variant="contained" color="success" onClick={()=>increment(information)} style={{height:"30px", width:"0px"}}>
        +
      </Button>
    </div>
  )
}

export default CartCard

