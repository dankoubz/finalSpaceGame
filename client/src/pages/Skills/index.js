import React, {Component} from "react";
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';

class App extends Component {

    state = {
        title: "Skills",
        slideNumber: 1,
        numberOfSlides: 5
    };

    render() {
        return (
            <div>
                <Header pageTitle={this.state.title}/>
                <Carousel 
                    slideNumber={this.state.slideNumber} 
                    pageTitle={this.state.title}
                    numberOfSlides={this.state.numberOfSlides}
                />  
            </div>
        )
    }
}

export default App;