import React from "react";
import { useState,useEffect } from "react";
import { swiggy_Api } from "../components/Contants";

const useSwiggy = () =>{
    const [restaurantsList, setRestaurantList] = useState([]);

    const swiggyApi = async() =>  {
        
       try{
        const response = await fetch("http://localhost:8080/restaurants");
        const jsondata = await response.json();
    
        const restaurants = jsondata;
      // console.log(restaurants?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // console.log("res",restaurants)
  
          setRestaurantList(restaurants?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
       }
       catch(err){

       }
          
    };
    
    useEffect(() => {
      swiggyApi();
    },[restaurantsList.length === 0]); 

 

    return restaurantsList
}
export default useSwiggy
