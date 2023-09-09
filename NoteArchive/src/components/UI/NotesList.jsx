import React from 'react'
import NoteCard from './NoteCard'

const NotesList = ({data}) => {
  return (
    <>

    {
      data?.map((item,index)=>(
      <NoteCard item={item} key={index}/>
      ))
    }
      
      

    </>
  )
}

export default NotesList
