import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.css";
import Card from "../Card";

export default class Carousel extends Component {
  
    render(props) {

        // setting variables to handle card data from each page
        const typeOfCard = this.props.pageTitle;
        const data = this.props.information;

        let cardData = [];

        // switch case: push array for card data
        switch(typeOfCard) {
            case "Skills":
                sortSkills(data);
                break;
            case "Dev":
            case "Creative":
            case "Work":
                sortCards(data);
                break;
            default:
                console.log("no no noooO!");
        }

        function sortCards(data) {
            let results = data;

            for (let i = 0; i < data.length; i += 1) {
                let split = results.slice(i, i+1);
                cardData.push(split);
            }
        }

        function sortSkills(data) {
            let results = data;

            for (let i = 0; i < data.length; i += 3) {
                let split = results.slice(i, i+3);
                cardData.push(split);
            }
        }

        // Carousel Data Customisation

        let slideNumber = this.props.slideNumber;
        let responsive = this.props.mobileResponsive;

        // Settings with let's to change mobile responsiveness for each page type

        const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToShow: slideNumber,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: responsive[0],
                slidesToScroll: 1,
                }
            },
            {
            breakpoint: 900,
            settings: {
                slidesToShow: responsive[1],
                slidesToScroll: 1,
            }
            },
            {
            breakpoint: 550,
            settings: {
                slidesToShow: responsive[2],
                slidesToScroll: 1
            }
            }
        ]
    };

    let carouselPosition = "carouselPos d-flex justify-content-center align-items-center";

    return (
        <div className={carouselPosition}>
            <main>
                <Slider className="h-100 w-100" {...settings}>
                    
                    {cardData.map((postData, index) => {
                        return <Card key={index}
                        title={this.props.pageTitle} 
                        information={cardData[index]}
                        />
                    })}
                </Slider>
            </main>
        </div>
    );
  }
}

