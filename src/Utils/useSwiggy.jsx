import React from "react";
import { useState,useEffect } from "react";

const useSwiggy = () =>{
    const [restaurantsList, setRestaurantList] = useState([]);

    async function swiggyApi ()  {
        
        const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsondata = await response.json();
    
        const restaurants = jsondata;
       //console.log(restaurants);
  
          setRestaurantList(restaurants?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
          
    };
    
       useEffect(() => {
      swiggyApi();
    },[]); 


    return restaurantsList
}
export default useSwiggy