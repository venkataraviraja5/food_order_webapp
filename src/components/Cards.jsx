import React from 'react'
import "../components/Card.css"
import { img_url } from './Contants'

const Cards = ({name , imgid,cuisineitems,rating,distance}) => {
  const fullStars = Math.floor(rating);
  const stars =[]
  for(let i=0;i<fullStars;i++){
    stars.push( <span key={i} className='star'>&#9733;</span>);
  }
  return (
    <div>
      <div className='card1'>
       <img src={img_url+ imgid} className='image'/>
      <h3>{name}</h3>
        <div className='cuisine'>
        <p>{cuisineitems}</p>
        {stars}
        <p>  {distance}Km</p>
        </div>
       </div>
      
    </div>
  )
}

export default Cards
