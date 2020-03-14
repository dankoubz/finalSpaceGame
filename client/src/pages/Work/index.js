import React, {Component} from "react";
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import InfoWork from '../../templates/infoWork.json';
import './work.css';

class App extends Component {

  state = {
    title: "Work",
    message:["brands I've worked with", 2000,
    "milestones and achievements", 2000,],
    slideNumber: 2,
    mobileResponsive: [ 2, 1, 1],
    information: InfoWork
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