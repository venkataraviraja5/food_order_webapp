import React from 'react'
import "../components/Shimmer.css"
const Shimmer = () => {
  return (
    <div className='container'>
      {
        Array(10).fill("").map((e,index)=>(
            <div className='shimmercard' key={index}>

            </div>
        ))
      }
    </div>
  )
}

export default Shimmer
