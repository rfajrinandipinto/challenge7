import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Form from '../../components/form/Form'
import CarList from '../../components/carList/CarList'
import { useState } from 'react'

const Cars = () => {
    

  const [formResult, setFormResult] = useState(0);

    return (
        <div>
          <Navbar/>
          <Header/>
          <Form setFormResult={setFormResult}/>
          <CarList formResult={formResult} />
          <Footer/>
        </div>
        
      )
}

export default Cars