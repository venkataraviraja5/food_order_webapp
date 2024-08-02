import React from 'react'
import "../components/MyOrders.css"
import { useSelector } from 'react-redux'
import { img_url } from './Contants'

const MyOrders = () => {
  
    const myorderslist = useSelector(store => store.cart. myorders)

    const mysearchorderlist = useSelector(store => store.cart.searchOrders) 
    console.log(mysearchorderlist);  
  return (
    <div className='my-orders'>
        {
            myorderslist.length === 0 ? <div className='tag'> <h1>YOUR ORDER LIST IS EMPTY</h1></div> : <div><h1>ORDERS WILL DELIVER IN FEW MINUTES</h1> </div>
        }
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
       <div className='mysearchorderlist'>
       {
             mysearchorderlist.map((value) => (
                value.map(item => (
                    <div className='order-card'>
                     <img src={img_url + item?.card?.card?.info?.imageId}  className='myorder-img'/>
                     {item?.card?.card?.info?.name}
                    <p> {item?.card?.card?.restaurant?.info?.slugs?.restaurant}</p>
                    </div>
                ))
            ))
        }
        
       </div>
    </div>
  )
}

export default MyOrders
