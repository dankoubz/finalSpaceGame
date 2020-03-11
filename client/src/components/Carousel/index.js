import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.css";
import Card from "../Card";

export default class Carousel extends Component {
  
  render(props) {

    let slideNumber = this.props.slideNumber;
    let title = this.props.pageTitle;

    console.log(this.props.numberOfSlides);

    this.state = {
        numberOfSlides: this.props.numberOfSlides
    };

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: slideNumber,
      slidesToScroll: 1,
    };

    return (
        <div className="carouselPos mt-5 d-flex justify-content-center align-items-center">
            <main>
                <Slider {...settings}>
            
                <Card key={5} />
                
                </Slider>
            </main>
        </div>
    );
  }
}

