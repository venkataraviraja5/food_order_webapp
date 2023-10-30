import React from "react";
import { useState,useEffect } from "react";
import { swiggy_Api } from "../components/Contants";

const useSwiggy = () =>{
    const [restaurantsList, setRestaurantList] = useState([]);

    const swiggyApi = async() =>  {
        
       try{
        const response = await fetch(swiggy_Api);
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