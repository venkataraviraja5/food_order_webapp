import React from 'react'
import { img_url } from './Contants'
import "../components/Searchcard.css"
import { searchAddItem } from '../Utils/cartSlice'
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button';

const Searchcard = ({name,imgid,price,item}) => {
   
    const dispatch = useDispatch()

    const additem = (item) =>{
       dispatch(searchAddItem(item))
    }

  return (
    <div className='search-card'>
       <div className='left-search'>
          <h4>{name}</h4>  
          <h5>Price:{price/100}/-</h5>
       </div>
       <div className='right-search'>
          <img src={img_url+imgid} className='search-img'/>
          <Button variant="contained" color="success" onClick={() =>additem(item)} className='search-addbtn' style={{marginLeft:"20px"}}>
            Add+
          </Button>
       </div>
    </div>
  )
}

export default Searchcard
