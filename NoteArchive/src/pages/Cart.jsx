import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container,Row,Col } from 'reactstrap'

import { motion } from 'framer-motion'
import {cartActions} from '../redux/slices/cartSlice'
import { useSelector,useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

const Cart = () => {
  const cartItems=useSelector(state=>state.cart.cartItems);
  const totalAmount = useSelector(state=>state.cart.totalAmount)


  return <Helmet title='Cart'>
    <CommonSection title='' />
    <section>
      <Container>
        <Row>
          <Col lg='9'>
            {
              cartItems.length=== 0 ?(
               <h2 className='fs-4 text-center'>Kartınızda not yok.</h2> ):( 
              <table className='table bordered'>
              <thead>
                <tr>
                  <th>Not</th>
                  <th>Not İsmi</th>
                  <th>Fiyat</th>
                  <th >Sil</th>
                </tr>
              </thead>
  
              <tbody>
                {
                  cartItems.map((item,index)=>(
                    <Tr item={item} key={index}/>
                  )
                  )
                }
              </tbody>
              </table>
            )}

          </Col>

          <Col lg='3'>
            <div>
              <h6 className='d-flex align-items-center justify-content-between'>
                Toplam
                <span className='fs-4 fw-bold'>₺{totalAmount}</span>
              </h6>
            </div>
            <div  className='mt-4'>
              
                <div className='mt-4'> 
                 <button className='buy__btnn w-100 mt-3'><Link to='/checkout'> Öde</Link>
                 </button>
                  </div>
                  <button className='buy__btnn w-100 mt-3'><Link to='/arsiv'> Alışverişe devam edin</Link>
              </button>
            </div>
          </Col>

        </Row>
      </Container>
    </section>

  </Helmet>
}

const Tr= ({item}) => {

  const dispatch=useDispatch()
  const deleteNote= () =>{
    dispatch(cartActions.deleteItem(item.id))
  }

  return <tr >
  <td><img src={item.imgUrl} alt="" className='img'/></td>
  <td>{item.noteName}</td>
  <td>{item.price}</td>
  <td>
    <motion.i
     whileTap={{scale:1.2}} 
     onClick={deleteNote}
     class="ri-delete-bin-line"
     ></motion.i></td>
  </tr>
}

export default Cart
