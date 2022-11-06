import React, { Component } from 'react';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Services from '../../components/services/Services';
import Whyus from '../../components/whyus/Whyus';
import Testimony from '../../components/testimony/Testimony';
import Cta from '../../components/cta/Cta';
import Faq from '../../components/faq/Faq';
import Footer from '../../components/footer/Footer';

export default class Home extends Component {
  
  render() {
    
    return (
      <div>
        <Navbar/>
        <Header/>
        <Services/>
        <Whyus />
        <Testimony/>
        <Cta/>
        <Faq/>
        <Footer/>
      </div>
      
    )
  }
}
