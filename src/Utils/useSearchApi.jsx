import React, {useState, useEffect } from 'react'

const useSearchApi = ({newSearchdish}) => {
    const [searchList,setsearchList] = useState([])

    
    const searchApi = async() =>{
        const searchdata = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.385044&lng=78.486671&str=biryani&trackingId=null&submitAction=SUGGESTION&queryUniqueId=73632e99-f832-6f71-d054-a1ff4b822e27&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%22ocrnq6kwvvrl2ouea492%22%2C%22dishFamilyId%22%3A%22846613%22%2C%22dishFamilyIds%22%3A%5B%22846613%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D`);
        const jsondata = await searchdata.json();
        console.log("fetch Data",jsondata)
        setsearchList(jsondata?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards)
       }
  
     useEffect(()=> {
        if (newSearchdish) {
            searchApi();
        } else {
            setsearchList([]);
            console.log("empty");
        }
    },[newSearchdish])

  return searchList
}

export default useSearchApi
