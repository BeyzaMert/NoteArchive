 import React,{useState} from 'react'

 import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'

import '../styles/arsiv.css'

import notes from '../assets/data/notes'
import NotesList from '../components/UI/NotesList'

 const Arsiv = () => {
  const [notesData,setNotesData]=useState(notes)

  const handleFilter =  e => {
    const filterValue= e.target.value
    if(filterValue==='ilkokul'){
      const filteredNotes=notes.filter(
        (item)=>item.category==='ilkokul'
        )

        setNotesData(filteredNotes)
    }

    if(filterValue==='ortaokul'){
      const filteredNotes=notes.filter(
        (item)=>item.category==='ortaokul'
        )

        setNotesData(filteredNotes)
    }
    if(filterValue==='lise'){
      const filteredNotes=notes.filter(
        (item)=>item.category==='lise'
        )

        setNotesData(filteredNotes)
    }

    if(filterValue==='universite'){
      const filteredNotes=notes.filter(
        (item)=>item.category==='universite'
        )

        setNotesData(filteredNotes)
    }

    if(filterValue==='yukseklisans'){
      const filteredNotes=notes.filter(
        (item)=>item.category==='yukseklisans'
        )

        setNotesData(filteredNotes)
    }

    if(filterValue==='doktora'){
      const filteredNotes=notes.filter(
        (item)=>item.category==='doktora'
        )

        setNotesData(filteredNotes)
    }
    if(filterValue==='master'){
      const filteredNotes=notes.filter(
        (item)=>item.category==='master'
        )

        setNotesData(filteredNotes)
    }
  };

  const handleSearch= e => {
    const searchTerm= e.target.value

    const searchedNotes=notes.filter(item=>item.noteName.
      toLowerCase().includes(searchTerm.toLowerCase()))

    setNotesData(searchedNotes)

  }



   return <Helmet title='Arsiv'>
    <CommonSection title='Notlar'/>

    <section>
      <Container>
        <Row>
          <Col  lg='3' md='6'>
          <div className="filter__widget">
            <select onChange={handleFilter} >
              <option>Kategoriye göre filtrele</option>
              <option value="ilkokul">İlkokul</option>
              <option value="ortaokul">Ortaokul</option>
              <option value="lise">Lise</option>
              <option value="universite">Universite</option>
              <option value="yukseklisans">Yüksek Lisans</option>
              <option value="doktora">Doktora</option>
              <option value="master">Master</option>
            </select>
          </div>
          </Col>
          <Col  lg='3' md='6'>
          {/* <div className="filter__widget text-end">
            <select >
              <option>Derse Göre Filtrele</option>
              <option value="ilkokul">İlkokul</option>
              <option value="ortaokul">Ortaokul</option>
              <option value="lise">Lise</option>
              <option value="universite">Universite</option>
              <option value="yukseklisans">Yüksek Lisans</option>
              <option value="doktora">Doktora</option>
              <option value="master">Master</option>
            </select>
          </div> */}
          </Col>
          <Col  lg='6' md='12'>
            <div className="search__box">
              <input type='text' placeholder='Ara...' onChange={handleSearch}  />
              <span><i class="ri-search-line"></i></span>
            </div>
          </Col>

        </Row>
      </Container>
    </section>

    <section className='pt-0'>
      <Container>
        <Row>
          {notesData.length=== 0? (
            <h1 className='text-center fs-4'>Not bulunamadı!</h1>
            ) : (
            <NotesList data={notesData}/>
          )}
        </Row>
      </Container>
    </section>

   </Helmet>
 }
 
 export default Arsiv
 