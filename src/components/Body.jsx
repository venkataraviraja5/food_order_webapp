import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import "../components/Card.css"
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import useSwiggy from '../Utils/useSwiggy';
import Button from '@mui/material/Button';


const Body = () => {
   const restaurantsList = useSwiggy()
   const [sortBy, setSortBy] = useState(''); 
   let restaurants = 0;
   const sortRestaurants = () => {
    if(restaurantsList){
      const resList = [...restaurantsList];
      if (sortBy === 'rating') {
        resList.sort((a, b) => b.info.avgRating - a.info.avgRating);
      }
      else if(sortBy === 'distance'){
       resList.sort((a, b) => a.info?.sla?.lastMileTravel - b.info?.sla?.lastMileTravel);
      }
      return resList;
    }
   };
 
   const handleSortChange = (option) => {
     setSortBy(option);
   };
   if(restaurantsList){
   restaurants = sortRestaurants();
   }


  return (
    <div className='cards-container'> 
    <h1 className='tag'>Restaurants with online food delivery</h1>
    {restaurants.length > 0 && restaurantsList.length > 0 ? 
   <div className='sort'>
   <p className='filter'>Filters </p>
   <div className='sort-btn'>
   <Button variant="contained" size="small" onClick={() => handleSortChange('rating')} style={{height:"35px"}}>
          Rating
        </Button>
     <Button variant="contained" size="small" onClick={() => handleSortChange('distance')} style={{marginLeft:"20px",height:"35px"}}>
          Distance
        </Button>
   </div>
   </div> : null}
   <div className='line'></div>
    <div className='body-data'>

  
   {restaurants && restaurantsList ? 
   <div>
    {restaurants != 0 ?
      <div className='cards-flex-container'>
        {restaurants.map((val) => (
          <div key={val?.info?.id}>
            <Link to={"/restaurants/" + val?.info?.id} className='link-no-underline'>
              <Cards name={val?.info?.name} imgid={val?.info?.cloudinaryImageId} cuisineitems={val?.info?.cuisines.join(",")} 
              rating={val?.info?.avgRating} distance={val?.info?.sla?.lastMileTravel}/>
              
            </Link>
          </div>
        ))}
      </div> :
      <h1><Shimmer /></h1>
    }</div>: <Shimmer /> 
  }
   </div>
  </div>
  );
};

export default Body;


