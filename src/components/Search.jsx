import React, { useEffect, useState } from 'react'
import Searchcard from './Searchcard'
import "../components/Searchcard.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Search = () => {

    const [searchdish,setSearchdish] = useState('')
    const [searchList,setsearchList] = useState([]);

    const searchApi = async() =>{
     if(searchdish === ""){
        
     }
     else{
        const searchdata = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.385044&lng=78.486671&str=${searchdish}&trackingId=null&submitAction=SUGGESTION&queryUniqueId=73632e99-f832-6f71-d054-a1ff4b822e27&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%22ocrnq6kwvvrl2ouea492%22%2C%22dishFamilyId%22%3A%22846613%22%2C%22dishFamilyIds%22%3A%5B%22846613%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D`);
        const jsondata = await searchdata.json();
      // console.log(jsondata?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards)
        setsearchList(jsondata?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards)
     }
     }

    const handleChange = (event) =>{
       setSearchdish(event.target.value)
    }

    const sortPriceHightoLow = () =>{
        const sortedList = [...searchList];
        sortedList.sort((a,b) => b.card?.card?.info?.price - a.card?.card?.info?.price);
        setsearchList(sortedList)
    }

    const sortPriceLowtoHigh = () =>{
        const sortedList = [...searchList];
        sortedList.sort((a,b) => a.card?.card?.info?.price - b.card?.card?.info?.price);
        setsearchList(sortedList)
    }
    
  return (
    <div className='search'> 
     <div className='search-bar'>
      <input type='text' value={searchdish} onChange={handleChange} 
         className='input-box' placeholder='search your food'
      /> <img src='https://img.icons8.com/?size=512&id=132&format=png' style={{height:"30px",width:"30px",marginLeft:"10px",cursor:"pointer"}} onClick={searchApi} />
      </div>
      {searchList.length >0 ?
      <div className='sortprice'>
      <h3>Filters:</h3><Button variant="contained" onClick={sortPriceHightoLow}>High to Low</Button><Button variant="contained" onClick={sortPriceLowtoHigh}>Low to High</Button>
      </div> : null }
      <div className='cards-flex-container'>
      {
        searchList.slice(1).map((value,index)=>(
        <div key={index}>
           <Searchcard name={value?.card?.card?.info?.name} imgid={value?.card?.card?.info?.imageId} 
           price={value?.card?.card?.info?.price}
           item={value}
           />
        </div>
        ))
      }
      </div>
    </div>
  )
}

export default Search
