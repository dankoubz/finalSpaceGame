import React, {Component} from "react";
import Header from '../../components/Header';

class App extends Component {

  state = {
    title: "Hey 👋",
    message:['full name: Daniel Koublachvili', 2000,],
  };

  render() {
    return (
      <div>
          <Header 
            pageTitle={this.state.title}    
            message={this.state.message}
        />
      </div>
    )
  }
}

export default App;