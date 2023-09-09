import React,{useState,useEffect} from 'react'

import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import notes from '../assets/data/notes'

import Helmet from  '../components/Helmet/Helmet'
import '../styles/home.css'

import {Container,Row,Col} from "reactstrap"
import heroImg from '../assets/images/hero_img.png'

import Services from '../services/Services'
import NotesList from '../components/UI/NotesList'

import Clock from '../components/UI/Clock'

import counterImg from '../assets/images/ortaokul-matematik-03.jpg'

const Home = () => {


  const [ilkokulNotes,setIlkokulNotes]=useState([]);
  const [ortaokulNotes,setortaokulNotes]=useState([]);
  const [liseNotes,setLiseNotes] = useState([]);
  const [universiteNotes,setUniversiteNotes] = useState([]);
  const [yukseklisansNotes,setYuksekLisansNotes] = useState([]);


  // const year= new Date().getFullYear()

  useEffect(()=>{
    const filteredIlkokulNotes=notes.filter(
      (item)=>item.category=== 'ilkokul'
      );

      const filteredOrtaokulNotes=notes.filter(
        (item)=>item.category=== 'ortaokul'
      );

      const filteredLiseNotes=notes.filter(
        (item)=>item.category=== 'lise'
      );

      const filteredUniversiteNotes=notes.filter(
        (item)=>item.category=== 'universite'
      );

      const filteredYukseLisansNotes=notes.filter(
        (item)=>item.category=== 'yukseklisans'
      );


        setIlkokulNotes(filteredIlkokulNotes)
        setortaokulNotes(filteredOrtaokulNotes)
        setLiseNotes(filteredLiseNotes)
        setUniversiteNotes(filteredUniversiteNotes)
        setYuksekLisansNotes(filteredYukseLisansNotes)

  },[]);

  return <Helmet title={"Home"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              {/* <p className="hero__subtitle">{year} İçinde En Çok Tıklanan Notlar</p> */}
              <h2>Aradığınız Notları Kolay Bulun!</h2>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
              {/* <button className="buy__btn">Satın Al</button> */}
            </div>
          </Col>


        <Col lg='6' md='6'>
          <div className="hero__img"></div>
          <img src={heroImg} alt=''/>
        </Col>

        </Row>
      </Container>
    </section>

    <Services/>
    {/* burdan sonrasını sil */}
    {/* <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>Trend Notlar 'ilkokul notları'</h2>
          </Col>
          <NotesList data={ilkokulNotes}/>
        </Row>
      </Container>
    </section>

    <section className="best__sales">
    <Container>
    <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>Satılan En İyi Notlar 'ortaokul notları'</h2>
          </Col>

          <NotesList data={ortaokulNotes} />
        </Row>
    </Container>

    </section>

    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='12' className='count__down-col'>
            <div className="clock__top-content">
              <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
              <h3 className='text-white fs-5 mb-3'>Türkçe Vize ve Final Soruları</h3>
            </div>
            <Clock/>

            <motion.button whileTap={{scale:1.1}} className='buy__btn store__btn'> 
            <Link to='/arsiv'>Visit Store</Link>
            </motion.button>
             </Col>

          <Col lg='6' md='12' className='text-end counter__img'>
            <img src={counterImg} alt="" />
             </Col>

        </Row>
      </Container>
    </section>

    <section className="new__arrivals">
      <Container>
       <Row>
        <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>New Arrivals 'lise notları'</h2>
          </Col>
          <NotesList data={liseNotes}/>
          <NotesList data={universiteNotes} />
       </Row>
      </Container>
    </section>

    <section className="popular__category">
    <Container>
       <Row>
        <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>Popular in Category 'yüksek lisans notları'</h2>
          </Col>
          <NotesList data={yukseklisansNotes}/>
       </Row>
      </Container>
    </section> */}
  
  </Helmet>
}

export default Home
