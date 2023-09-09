import React from 'react'

import {motion} from 'framer-motion'
import '../../styles/note-card.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import {  toast } from 'react-toastify';

import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'

const VizeFinalCard = ({item}) => {

const dispatch= useDispatch()

const addToCart= ()=>{
  dispatch(cartActions.addItem({
    id:item.id,
    noteName:item.noteName,
    price:item.price,
    imgUrl:item.imgUrl
  })
  )

  toast.success('Sınav başarıyla sepetinize eklendi.')

  // alert('Not kartınıza eklendi.')
}


  return (
    <Col lg='3' md='4' className='mb-2'>
     <div className='note__item'>
        <div className='note__img'>
            <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt='' />
        </div> 
        <div  className='p-2 note__info'>
        <h3 className='note_name'>
          <Link to={`/vizefinaldetail/${item.id}`}>{item.noteName}</Link></h3>
        <span >{item.category}</span>
        </div>
        <div className='note__card-bottom d-flex align-items-center
         justify-content-between p-2'>
          <span className='price'>₺{item.price}</span>
          <motion.span whileTap={{scale:1.2}} onClick={addToCart}>
            <i class="ri-add-line"></i>
            </motion.span>

        </div>
      
    </div>
    </Col>
   
  )
}

export default VizeFinalCard
