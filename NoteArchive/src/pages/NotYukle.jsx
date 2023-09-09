import React,{useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/notyukle.css'

const NotYukle = () => {
   
  const [file,setFile]=useState(null)



  return <Helmet title='Not Yükle'>
    <section>
        <Container>
            <Row>
                <Col>
                <div className='fw-bold'>
                    Notlarınızı burdan yükleyebilirsiniz.
                </div>

                <Form className='note__item'>
                  <FormGroup >
                    <input className='note__title' type='text' placeholder='Not başlığını giriniz.'/>
                  </FormGroup>

                      <div className='category'>
                    <select  className="note__category" >
                  <option>Not kategorisini seçiniz.</option>
                  <option value="ilkokul">İlkokul</option>
                  <option value="ortaokul">Ortaokul</option>
                  <option value="lise">Lise</option>
                  <option value="universite">Universite</option>
                  <option value="yukseklisans">Yüksek Lisans</option>
                  <option value="doktora">Doktora</option>
                  <option value="master">Master</option>
                </select>
                  </div>

          

                  <div>
                    <textarea className='shortDesc' rows={4} placeholder='Kısa not açıklamasını giriniz.'/>
                  </div>

                  <div>
                    <textarea className='longDesc' rows={8} placeholder='Uzun not açıklamasını giriniz.'/>
                  </div>

                  <FormGroup>
                    <input className='note__pricee' type='text' placeholder='Not ücretini giriniz eğer ücretsiz satmak istiyorsanız ücretsiz butonuna tıklayınız.'/>
                  </FormGroup>
                  <FormGroup >
                    <input className='checkbox' type='checkbox' />
                    <h4 className='checkbox__title'>Ücretsiz</h4>
                  </FormGroup>
                    <h4 className='img__title'>Not Fotoğraflarını Seçiniz</h4>
                   <FormGroup className='auth__formm' >
                <input type='file'  onChange={(e)=> setFile(e.target.files[0])} />
              </FormGroup> 
                <div className='mt-4'>
                <button type='submit' className="yukle__btn ">Yükle</button>
                </div>
              

                </Form>

                </Col>
            </Row>
        </Container>
    </section>

  </Helmet>
}

export default NotYukle
