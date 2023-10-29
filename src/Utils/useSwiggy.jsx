import React from "react";
import { useState,useEffect } from "react";

const useSwiggy = () =>{
    const [restaurantsList, setRestaurantList] = useState([]);
    const [latitude,setlatitude] = useState(17.385043)
    const [longitude,setlongitude] = useState(78.486671)

    const swiggyApi = async() =>  {
        
       try{
        const response = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const jsondata = await response.json();
    
        const restaurants = jsondata;
       //console.log(restaurants);
  
          setRestaurantList(restaurants?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
       }
       catch(err){

       }
          
    };
    
       useEffect(() => {
      swiggyApi();
    },[]); 

 

    return restaurantsList
}
export default useSwiggy