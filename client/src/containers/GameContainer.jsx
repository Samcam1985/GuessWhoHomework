import React from 'react';
import ReactDOM from 'react-dom';
import GuessSelector from '../components/GuessSelector.jsx'; 
import Card from '../components/Card.jsx';


var data = require('../characters.json');

class GameContainer extends React.Component {
  constructor(props){
    super(props);
    this.handleGuessSubmit = this.handleGuessSubmit.bind(this);
    this.state = { characters: [], characterToGuess: null};
  };


handleGuessSubmit(characterIndex){
    //this.setState({ answer: character });
    //const character = this.state.characters[characterIndex];
    const characterGuess = this.state.characters.filter((character) => character.id == characterIndex);
    var answer;
    if(this.state.characterToGuess == characterGuess[0])
    {
     answer = (
        <div><span>Correct, you win!</span></div>
        );
    }
    else
    {
      answer = (
        <div><span>Incorrect, Try again!</span></div>
        );

    }
    ReactDOM.render(
      answer, 
      document.getElementById('answer')
      );
}

componentDidMount() {
    this.setState({ characters: data});
    this.setState({ characterToGuess: data[Math.floor(Math.random()*data.length)]});
}

render() {

    const characterCards = this.state.characters.map(function(character, index) {
      return <Card character={character} key={index}></Card>;
    });

    return (
      <div>
      <h2>Game of Thrones Guess Who</h2>
        {characterCards}
        <GuessSelector characters={this.state.characters} onGuessSubmit={this.handleGuessSubmit}></GuessSelector>
        <div id='answer'></div>
      </div>
    );
  }
}

export default GameContainer;


