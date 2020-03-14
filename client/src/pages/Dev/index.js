import React, {Component} from "react";
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import InfoDev from '../../templates/infoDev.json';
import "./dev.css";

class App extends Component {

  state = {
    title: "Dev",
    message:['my development projects', 2000,],
    slideNumber: 1,
    mobileResponsive: [ 1, 1, 1],
    information: InfoDev
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