import React from 'react'
import "../components/CartItems.css"
import { img_url } from './Contants'
import { useDispatch, useSelector } from 'react-redux'
import { searchincrementCounter,searchdecrementCounter,searchremoveItem } from '../Utils/cartSlice'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const SearchCartCard = ({title,image,information}) => {

    const dispatch = useDispatch()
    const counter = useSelector((store) => store.cart.counter[information.card.card.info.id] || 1)

    const removeElement = (value) =>{
        dispatch(searchremoveItem(value.card.card.info.id))
    }
    const decrement = (information) =>{
        dispatch(searchdecrementCounter({itemId : information.card.card.info.id ,itemPrice : information.card.card.info.price}))
    }
    const increment = (information) =>{
        dispatch(searchincrementCounter({itemId : information.card.card.info.id ,itemPrice : information.card.card.info.price}))
    }
  return (
    <div>
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
    </div>
  )
}

export default SearchCartCard
