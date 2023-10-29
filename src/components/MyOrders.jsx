import React from 'react'
import "../components/MyOrders.css"
import { useSelector } from 'react-redux'
import { img_url } from './Contants'

const MyOrders = () => {
  
    const myorderslist = useSelector(store => store.cart. myorders)
    console.log(myorderslist);

   
  
  return (
    <div className='my-orders'>
       <div className='myorderlist'>
       {
             myorderslist.map((value) => (
                value.map(item => (
                    <div className='order-card'>
                     <img src={img_url + item?.card?.info?.imageId}  className='myorder-img'/>
                     {item?.card?.info?.name}
                    <p> {item?.card?.info?.description}</p>
                    </div>
                ))
            ))
        }
        
       </div>
    </div>
  )
}

export default MyOrders
