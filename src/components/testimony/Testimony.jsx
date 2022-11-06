
import React, { Component } from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";



export default class Testimony extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }
    
  render() {
    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    };



    return (
        <section className="testimony" id="testimony">
        <div className="container-fluid">
          <div className="row text-center">
            <h2 className="section__title">Testimonial</h2>
            <p className="section__sub-title">Berbagai review positif dari para pelanggan kami</p>
          </div>
          <div className="row">
            <Slider ref={c => (this.slider = c)} {...settings} style={{maxWidth: "100vw",overflow: "hidden", paddingInline: "0"}} className="testimony__carousel">
                <TestimonialCard/>
                <TestimonialCard/>
            </Slider>
          </div>
          <div className="d-flex justify-content-center">
            <button onClick={this.previous} type="button" className="slider-prev">
                <i className="bi bi-chevron-left"></i>
            </button>
            <button onClick={this.next} type="button" className="slider-next">
                <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    );
  }
}
