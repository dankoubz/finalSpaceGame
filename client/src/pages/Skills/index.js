import React, {Component} from "react";
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import InfoSkills from '../../templates/infoSkills.json'

class App extends Component {

    state = {
        title: "Skills",
        message:['Hey you!', 200, 
                'ech', 50, 
                '🤔 tech / design tools 🤔', 1000, 
                "(Below) is a list of my design tools 😮", 2000,
                "👨‍💻and full-stack dev langauges", 2000,
                '🤔 tech / design tools 🤔', 5000, ],
        slideNumber: 3,
        mobileResponsive: [ 2, 2, 1],
        carouselNumber: 5,
        information: InfoSkills
    };

    render() {
        return (
            <div>
                <Header 
                    pageTitle={this.state.title}
                    message={this.state.message}
                />
                <Carousel 
                    slideNumber={this.state.slideNumber} 
                    pageTitle={this.state.title}
                    mobileResponsive={this.state.mobileResponsive}
                    carouselNumber={this.state.carouselNumber}
                    information={this.state.information}
                />  
            </div>
        )
    }
}

export default App;