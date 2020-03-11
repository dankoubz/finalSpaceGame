import React, {Component} from "react";
import Header from '../../components/Header';

class App extends Component {

  state = {
    title: "Work"
  };

  render() {
    return (
        <div>
            <Header pageTitle={this.state.title}/>
        </div>
    )
  }
}

export default App;