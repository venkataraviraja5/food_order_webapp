import React from 'react'
import { useState,useEffect } from 'react'

const useRestaurantMenu = ({id}) => {

    const [restaurant,setrestaurant] = useState(null)
    const [restaurantMenu,setrestaurantMenu] = useState([])

   const restaurantMenuItems = async() =>{
    const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
    const jsondata = await data.json();
  // console.log(jsondata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel.map((value)=> (value?.dish?.info?.name)))
  //console.log(jsondata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    setrestaurant(jsondata?.data?.cards[0])
    setrestaurantMenu(jsondata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
   // console.log(jsondata);
   }

   useEffect(()=>{
    restaurantMenuItems()
   },[])

  return {restaurant,restaurantMenu}
}

export default useRestaurantMenu
