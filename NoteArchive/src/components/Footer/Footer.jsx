import React from 'react'
import './footer.css'

import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year= new Date().getFullYear()
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='4' className='mb-4' md='6'>
        <div className="logo">
            <div>
              <h1 className='footer__title'>Not Evreni</h1>
            </div>
            
          </div>
          {/* <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nisi voluptatem odit accusamus nulla cupiditate aliquid possimus exercitationem veniam dolorem?
            </p> */}
           </Col >

        {/* <Col lg='3' md='3' className='mb-4'> 
        <div className="footer__quick-link">
          <h4 className="quick__links-title">En Çok Tıklanan Kategoriler </h4>
          <ListGroup className='mb-3'>
          <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>İlkokul Notları</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Ortaokul Notları</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Lise Notları</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Üniversite Notları</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Yüksek Lisans Notları</Link>
            </ListGroupItem>

            
          </ListGroup>
        </div>
        </Col > */}
        <Col lg='2' md='3' className='mb-4'> 
        <div className="footer__quick-link">
          <h4 className="quick__links-title">Linkler </h4>
          <ListGroup className='mb-3'>
          <ListGroupItem className='ps-0 border-0'>
              <Link to='/arsiv'>Arşiv</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='/cart'>Kart</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='/login'>Giriş Yap</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='/signup'>Kayıt Ol</Link>
            </ListGroupItem>

            {/* <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Privacy Policy</Link>
            </ListGroupItem> */}

            
          </ListGroup>
        </div></Col >

        <Col lg='3' md='4' >
        <div className="footer__quick-link">
          <h4 className="quick__links-title">İletişim</h4>
          <ListGroup className='footer__contact'>
          <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i class="ri-map-pin-line"></i></span>
              <p>Ankara, Türkiye</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
            <span><i class="ri-phone-line"></i></span>
              <p>+905537894566</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
            <span><i class="ri-mail-line"></i></span>
              <p>beyzamrt39@gmail.com</p>
            </ListGroupItem>


            
          </ListGroup>
        </div>
        </Col >
        <Col lg='12'>
          <p className='footer__copyright'>Copyright {year} developed by Beyza Nur Mert.All right reserved.</p>
        </Col>

      </Row>
    </Container>

  </footer>
}

export default Footer
