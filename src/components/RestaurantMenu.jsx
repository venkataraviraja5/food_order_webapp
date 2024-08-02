import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../components/RestaurantMenu.css"
import { img_url } from './Contants'
import useRestaurantMenu from '../Utils/useRestaurantMenu'
import { addItem } from '../Utils/cartSlice'
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const RestaurantMenu = () => {

    const {id} = useParams()
 
    const {restaurant,restaurantMenu} = useRestaurantMenu({id})
   // console.log(restaurantMenu);
    
    const price = 50;

    const dispatch = useDispatch()

    const handleAddItem = (item) =>{
        dispatch(addItem(item))
    }
 
  return (
    <div className='restaurant'>
     <div className='res-card'>
      <h1 className='res-name'>Restaurant Name : {restaurant?.name}</h1>
     
      <h4>{restaurant?.card?.card?.info?.city}</h4>
    
     </div>
     <div>
        <h1 className='menu'>Restaurant Menu</h1>
       {
        restaurantMenu?
        <div className='rescard'> 
             {
               restaurantMenu.map((value) => (
            <div key={value?.card?.info?.id} className='card'>
                <div className='leftmenu'>
                <h2>{value?.card?.info?.name}</h2>
                {value?.card?.info?.price ? <h4>Price:{value?.card?.info?.price/100}/-</h4>:<h4>Price:{price}/-</h4>}
                <p>{value?.card?.info?.description}</p>
                </div>
                <div className='rightmenu'>
                <img src={img_url + value?.card?.info?.imageId} className='menuimg'/>
                <Button variant="contained" color="success"  onClick={()=>handleAddItem(value)}  className='search-addbtn' style={{marginLeft:"20px"}}>
                  Add+
                </Button>
                </div>
              
            </div>
            
        ))
       }
        </div>:
        <div>
            <h1 className='close'>Sorry MENU Closed......</h1>
           <Link to="/"  className='go-back'><h2>Go Back to Home</h2></Link>
         </div>
      }
     </div>
    </div>
  )
}

export default RestaurantMenu
