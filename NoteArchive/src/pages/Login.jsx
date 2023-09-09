import React,{useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'

import '../styles/login.css'

const Login = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')



  return <Helmet title='login'>
    <section>
      <Container>
        <Row>
          <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold mb-4 title'>Giriş Yap</h3>

            <Form className='auth__form'>
              <FormGroup className='form__group'>
                <input type='email' placeholder='Emailinizi giriniz' value={email} onChange={e=> setEmail(e.target.value)} />
              </FormGroup>

              <FormGroup className='form__group'>
                <input type='password' placeholder='Şifrenizi giriniz' value={password} onChange={e=> setPassword(e.target.value)} />
              </FormGroup>

              <button type='submit' className="buy__btn auth__btn">Login</button>
              <p className='subtitle'>Hesabınız yok mu? {" "}<Link to='/signup'>Üye ol.</Link></p>

            </Form>
          </Col>
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default Login
