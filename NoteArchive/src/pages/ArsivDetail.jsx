import React,{useState,useRef,useEffect} from 'react'

import {Container,Row,Col} from 'reactstrap'
import { useParams } from 'react-router-dom'
import notes from '../assets/data/notes'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/arsiv-details.css'
import { motion } from 'framer-motion'
import NotesList from '../components/UI/NotesList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import {toast} from "react-toastify"

const ArsivDetail = () => {

  const[tab,setTab] = useState('desc')
  const reviewUser=useRef('')
  const reviewMsg=useRef('')
  const dispatch=useDispatch()

  const [rating,setRating]=useState(null)
  const {id}=useParams()
  const note=notes.find(item=>item.id===id)

  const {
    imgUrl,
    noteName, 
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category
  } = note; 

  // const relatedNotes=notes.filter(item=>item.category===category)

  const submitHandler = (e) =>{
    e.preventDefault()

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    // console.log(reviewUserName,reviewUserMsg,rating);

    const reviewObj={
      user:reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj)
    toast.success('Yorumunuz gönderildi!')
  }
    const addToCart=() =>{
      dispatch(
        cartActions.addItem({
        id,
        image:imgUrl,
        noteName,
        price,
      })
      );

      toast.success('Not sepetinize eklendi')
    };

/* related productta tıklanan productun gelmesi için*/
    // useEffect(()=>{
    //   window.scrollTo(0,0);
    // },[note]);

  

  return <Helmet title={noteName}>
    <CommonSection title={noteName} />

    <section className='pt-10'>
      <Container>
        <Row>
          <Col lg='6'> 
          <img src={imgUrl} alt="" />
          </Col>

          <Col lg='6'>
            <div className="note__details">
              <h2>{noteName}</h2>
              <div className='note__rating d-flex align-items-center gap-5 mb-3'> 
              <div>
                <span ><i class="ri-star-fill"></i></span>
                <span ><i class="ri-star-fill"></i></span>
                <span ><i class="ri-star-fill"></i></span>
                <span ><i class="ri-star-fill"></i></span>
                <span ><i class="ri-star-half-s-line"></i></span>

              </div>
              <p>(<span>{avgRating}</span> yıldız)</p>
              </div>

              <div className='d-flex align-items-center gap-5'>
              <span className='note__price'>₺{price}</span>
              {/* <span>Category: {category.toUpperCase()}</span> */}
              </div>
              <p className='mt-3'>{shortDesc}</p>

              <motion.button whileTap={{scale:1.1}}
                className="buy__btn mt-4" onClick={addToCart}>Karta Ekle</motion.button>
            </div>
          </Col>

        </Row>
      </Container>
    </section>

    <section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab__wrapper d-flex align-items-center
               gap-5">
                <h6 
                className={`${tab==='desc' ? 'active__tab': ""}`}
                onClick={()=> setTab('desc')}
                >
                  Açıklama
                  </h6>
                <h6 
                className={`${tab==='rev' ? 'active__tab': ""}`}
                onClick={()=> setTab('rev')}
                >
                  Yorumlar ({reviews.length})
                  </h6>
              </div>

              {
                tab==='desc' ? (
                    <div className="tab__content mt-5">
                <p>{description}</p>
              </div> 
              ):( 
              <div className='note__review mt-5'>
                <div className="review__wrapper">
                  <ul>
                    {
                      reviews?.map((item,index)=>(
                        <li kew={index} className='mb-4'>
                          <h6>Beyza Mert</h6>
                        <span>{item.rating}(yıldız)</span>
                        <p>{item.text}</p>
                        </li>
                      ))
                    }
                  </ul>
                  <div className="review__form">
                    <h4>Deneyimlerini Paylaş!</h4>
                    <form action="" onSubmit={submitHandler}>
                      <div className="form__group">
                        <input type='text' placeholder="İsim giriniz"
                         ref={reviewUser}
                         required
                         />     
                      </div>

                      <div className="form_group d-flex align-items-center gap-5 rating__group">
                        <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(1)}>1<i class="ri-star-fill"></i> </motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(2)}>2<i class="ri-star-fill"></i> </motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(3)}>3<i class="ri-star-fill"></i> </motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(4)}>4<i class="ri-star-fill"></i> </motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(5)}>5<i class="ri-star-fill"></i> </motion.span>

                      </div>

                      <div className="form__group">
                        <textarea 
                        ref={reviewMsg}
                        rows={4}
                        type='text'
                        placeholder="Yorumunu Yaz..."
                        required
                        />     
                      </div>
                      <motion.button whileTap={{scale:1.2}} type='submit' className="buy__btn">
                        Gönder</motion.button>
                    </form>
                  </div>
                </div>
              </div>
              )}

             
               </Col>
               {/* <Col lg='12'>
                <h2 className='related__title'>Ayrıca bunları da beğenebilirsiniz </h2>
               </Col>
               <NotesList data={relatedNotes}/> */}
          </Row>
        </Container>
      </section>
    </section>
  </Helmet>
}

export default ArsivDetail
