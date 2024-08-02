import React, { useState } from 'react'
import "../components/Header.css"
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const [signin,setsignin] = useState(false)
  const cartItems = useSelector(store => store.cart.items)
  const searchItems = useSelector(store => store.cart.searchItems)

  return (
    <div className='header'>
      <div className='left'>
         <a href='/'> <img src='https://play-lh.googleusercontent.com/h_l3BK710iqr1mH8WY0yEtIJmyPGAKV4upFt4n--NxZO-fJ8wwZxV3ZoSQRn5z1a_Q'
           className='icon'
         /></a>
      </div>
     
      <div className='right'>
            <h3><Link to="/search" className='link-no-underline'><img src='https://img.icons8.com/?size=512&id=132&format=png' style={{height:"20px",width:"20px"}} /></Link></h3>
            <h3><Link to="/" className='link-no-underline'>Home</Link></h3>
            <h3><Link to="/my-orders" className='link-no-underline'> Orders</Link></h3>
            <span onClick={()=>setsignin(!signin)}>{signin?<h3 style={{cursor:"pointer"}}>Sign Out </h3>:<h3 style={{cursor:"pointer"}}>Sign In</h3>}</span>
            <Link to="/cart" className='link-no-underline'><ShoppingCartIcon style={{marginTop:"20px"}}></ShoppingCartIcon></Link>
            <h3 className='cart-number'>[{cartItems.length + searchItems.length}]</h3>
      </div>
    </div>
  )
}

export default Header
