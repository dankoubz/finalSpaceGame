import React, {Component} from "react";
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import InfoCreative from '../../templates/infoCreative.json';
import "./creative.css";

class App extends Component {

  state = {
    title: "Creative",
    message:['moments of inspirations', 2000,
            'and favourite content creation!', 2000,],
    slideNumber: 3,
    mobileResponsive: [ 2, 2, 1],
    information: InfoCreative
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
                information={this.state.information}
            />
        </div>
    )
  }
}

export default App;