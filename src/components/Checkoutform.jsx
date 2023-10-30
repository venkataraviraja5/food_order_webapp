import React, { useState } from 'react'
import "../components/Checkout.css"
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { clearCart,formshow} from '../Utils/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { myordersfunction } from '../Utils/cartSlice'
import { mysearchorderfunction } from '../Utils/cartSlice'

const Checkoutform = () => {
    const price = useSelector(store => store.cart.price)
    const itemslist = useSelector(store => store.cart.items)
    const searchorderlist = useSelector(store => store.cart.  searchItems)
    //console.log(itemslist);
    const dispatch = useDispatch()
    const [name,setname] = useState('')
    const [address,setaddress] = useState('')
    const [number,setnumber] = useState('')

    const orderbtn = () =>{
    if(name.length === 0 || address.length ===0 || number.length === 0){
        alert("Enter Your Details")
    }
    else{
        dispatch(clearCart())
        alert("Oder Succesfull")
        dispatch(formshow(false))
        dispatch(myordersfunction(itemslist))
        dispatch( mysearchorderfunction(searchorderlist))
    }
    }

    const namehandleclick = (e) =>{
        setname(e.target.value)
    }
    
    const addresshandleclick = (e) =>{
        setaddress(e.target.value)
    }
    
    const numberhandleclick = (e) =>{
        setnumber(e.target.value)
    }
  return (
  <div className='checkout-form'>
     <div className='form-style'>
          <div class="form-field">
            <label for="name" class="form-label">Name:</label>
            <input type="text" id="name" class="form-input" placeholder="Enter your name" onChange={namehandleclick} />
          </div>
          <div class="form-field">
            <label for="address" class="form-label">Address:</label>
            <input type="text" id="address" class="form-input" placeholder="Enter your address" onChange={addresshandleclick}/>
          </div>
          <div class="form-field">
            <label for="mobile" class="form-label">Mobile Number:</label>
            <input type="tel" id="mobile" class="form-input" placeholder="Enter your mobile number" onChange={numberhandleclick}/>
          </div>
          <h2>Total Amount - ₹{price}</h2>
          <div class="form-field">
            {name && address && number ?
            <div>
                <Link to="/"><button class="submit-button" onClick={orderbtn}>Order</button></Link>
            </div>:
            <div>
                <button class="submit-button" onClick={orderbtn}>Order</button>
           </div>
        }
            
          </div>
        </div>
  </div>
  )
}

export default Checkoutform
