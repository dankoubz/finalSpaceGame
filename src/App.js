import React, { Component } from 'react';
import Nav from "./components/Nav";
import Background from "./components/BG";
import characters from "./characters.json";
import Message from "./components/Message";
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
    characters: characters, // characters json file
    message: "Click an image to begin!",
    messageClass: ""
  };

  // shuffle cards start
  shuffle = (array) => {
    let currentIndex = array.length; // keep current
    let temporaryValue; // hold temp value
    let randomIndex; // hold random index

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex); // generate num
      currentIndex -= 1; // -1 off current index

      // And swap it with the current element.
      temporaryValue = array[currentIndex]; // switch current index to temp
      array[currentIndex] = array[randomIndex]; // swap
      array[randomIndex] = temporaryValue; // swap
    }

    return array; // return data
  }

  // function to shuffle cards when called
  shuffleChararcters = (name) => {

    var resetNeeded = false; // set reset

    const characters = this.state.characters.map(clickTrue => {
      // check if name is the same
      if (clickTrue.name === name) {
        // check if clicked image is false
        if (clickTrue.isClicked === false) {
          // run correct selection and set clickTrue to true
          this.handleCorrectSelection()
          return { ...clickTrue, isClicked: true}
        } else {
          resetNeeded = true // set rest (below)
          return { ...clickTrue, isClicked: false} // reset states
        }
      }

      return clickTrue
    })

    // if reset true run shffle characters
    if (resetNeeded) {
      this.setState({
        characters: this.shuffle(this.handleIncorrectSelection()),
        messageClass:"incorrect"
      })
    } else {
      // check if game is won before rendering characters
      this.setState({ characters: this.shuffle(this.handleResetWin(characters)) })
    }
  }

  // function to handle correct clicks
  handleCorrectSelection = () => {
    // measure score increment to top score
    if (this.state.score+1 > this.state.topScore) {
      this.setState({topScore: this.state.topScore+1})
    }
    // measure score to max score of 15
    if (this.state.score+1 === this.state.maxScore) {
      this.setState({score: this.state.score+1, message: "Congrats! You win!", messageClass:"correct"})
    } else {
      this.setState({score: this.state.score+1, message: "You guessed correctly!", messageClass:"correct"})
    }
  }

  handleResetWin = (currentCharacters) => {
    // if current score is at max reset score to 0 and topscore to 0
    if (this.state.score+1 === this.state.maxScore) {
      this.setState({score: 0, topScore: 0})
      // reset clicked state for characters
      const updatedCharacters = currentCharacters.map(clickTrue => (true) ? { ...clickTrue, isClicked: false } : clickTrue)
      return updatedCharacters
    }else{
      return currentCharacters
    }
  }

  handleIncorrectSelection = () => {
    //incorrect selection made, reset score to 0
    this.setState({score: 0, message: "You guessed incorrectly!"})
    //reset clicked state for characters
    const updatedCharacters = this.state.characters.map(clickTrue => clickTrue.isClicked === true ? { ...clickTrue, isClicked: false } : clickTrue)
    return updatedCharacters
  }

  // function to redner characters from json file
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
        
        <div className="content items-contian col-12 col-xl-9 mt-5 mx-auto justify-content-center d-flex flex-wrap">
          {this.renderCharacters()}
        </div>
        
        <Message
          message={this.state.message}
          messageClass={this.state.messageClass}
         />
      </div>
    );
  }
}

export default App;