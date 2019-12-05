import React, { Component } from 'react';
import Nav from "./components/Nav";
import Background from "./components/BG";
import characters from "./characters.json";
import Item from './components/Item'; 

class App extends Component {

  // Setting the initial state of the App component
  constructor(){
    super()

    this.shuffleChararcters = this.shuffleChararcters.bind(this)
  }

  state = {
    score: 0, // collect score
    topScore: 0, // capture top score 
    maxScore: 15, // game highscore limit
    characters: characters // characters json file
  };

  shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  shuffleChararcters = (name) => {
    // this.handleResetWin();
    var resetNeeded = false;
    const characters = this.state.characters.map(clickTrue => {
      //clickTrue.name === name ? { ...clickTrue, isClicked: true } : clickTrue
      if(clickTrue.name === name) {
        if (clickTrue.isClicked === false) {
          this.handleCorrectSelection()
          return { ...clickTrue, isClicked: true}
        }else{
          resetNeeded = true
          return { ...clickTrue, isClicked: false}
        }
      }
      return clickTrue
    })

    if (resetNeeded) {
      this.setState({
        characters: this.shuffle(this.handleIncorrectSelection()),
        messageClass:"incorrect"
      })
      
    }else{
      //check if game is won before rendering characters
      this.setState({ characters: this.shuffle(this.handleResetWin(characters)) })
    }
    
  }

  handleCorrectSelection = () => {
    
    if (this.state.score+1 > this.state.topScore) {
      this.setState({topScore: this.state.topScore+1})
    }
    if (this.state.score+1 === this.state.maxScore) {
      this.setState({score: this.state.score+1, message: "Congrats! You win!", messageClass:"correct"})
    }else{
      this.setState({score: this.state.score+1, message: "You guessed correctly!", messageClass:"correct"})
    }
  }

  handleResetWin = (currentCharacters) => {
    //if current score is at max reset score to 0 and topscore to 0
    if (this.state.score+1 === this.state.maxScore) {
      this.setState({score: 0, topScore: 0})
      //reset clicked state for characters
      const updatedCharacters = currentCharacters.map(ch => (true) ? { ...ch, isClicked: false } : ch)
      return updatedCharacters
    }else{
      return currentCharacters
    }
  }

  handleIncorrectSelection = () => {
    //incorrect selection made, reset score to 0
    this.setState({score: 0, message: "You guessed incorrectly!"})
    //reset clicked state for characters
    const updatedCharacters = this.state.characters.map(ch => ch.isClicked === true ? { ...ch, isClicked: false } : ch)
    return updatedCharacters
  }

  renderCharacters = () => {
    return this.state.characters.map((character) =>
            <Item 
              image={character.image} 
              name={character.name} 
              key={character.id} 
              onClick={this.shuffleChararcters} 
            />
          );
  }

  // render application components
  render() {
    return (
      <div className="w-100">
        <Background />
        <Nav 
          score={this.state.score}
          topscore={this.state.topScore}
        />
        
        <div className="content items-contian col-12 col-lg-10 col-xl-9 mt-5 mx-auto justify-content-center d-flex flex-wrap">
          {this.renderCharacters()}
        </div>
        
      </div>
    );
  }
}

export default App;