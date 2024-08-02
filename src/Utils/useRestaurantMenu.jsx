import React from 'react'
import { useState,useEffect } from 'react'

const useRestaurantMenu = ({id}) => {

    const [restaurant,setrestaurant] = useState(null)
    const [restaurantMenu,setrestaurantMenu] = useState([])

   const restaurantMenuItems = async() =>{
    const data = await fetch(`https://food-webapp-ncnn.onrender.com/restaurantmenu/${id}`);
    const jsondata = await data.json();
  // console.log(jsondata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel.map((value)=> (value?.dish?.info?.name)))
  //console.log(jsondata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]);
    setrestaurant(
      jsondata?.data?.cards[0]?.card?.card?.info || 
      jsondata?.data?.cards[1]?.card?.card?.info ||
      jsondata?.data?.cards[2]?.card?.card?.info ||
      jsondata?.data?.cards[3]?.card?.card?.info
    )
    setrestaurantMenu(
      jsondata?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ||
      jsondata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ||
      jsondata?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ||
      jsondata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ||

      jsondata?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ||
      jsondata?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards ||
      jsondata?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards ||
 

      jsondata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ||
      jsondata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards ||
      jsondata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards ||
  

      jsondata?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ||
      jsondata?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards ||
      jsondata?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards ||
   
      
      jsondata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ||
      jsondata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards ||
      jsondata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards 
   

      )
    console.log("json",jsondata);
   }

   useEffect(()=>{
    restaurantMenuItems()
   },[])

  return {restaurant,restaurantMenu}
}

export default useRestaurantMenu
