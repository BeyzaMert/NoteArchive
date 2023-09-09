import React from 'react'
import VizeFinalCard from './VizeFinalCard'

const VizeFinalList = ({data}) => {
  return (
    <>

    {
      data?.map((item,index)=>(
      <VizeFinalCard item={item} key={index}/>
      ))
    }
      
      

    </>
  )
}

export default VizeFinalList
