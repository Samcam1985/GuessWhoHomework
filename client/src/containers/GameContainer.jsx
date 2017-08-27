import React from 'react';
import GuessSelector from '../components/GuessSelector.jsx'; 
import Card from '../components/Card.jsx';

var data = require('../characters.json');

class GameContainer extends React.Component {
  constructor(props){
    super(props);
    this.answer = this.setAnswer.bind(this);
    this.state = { characters: []};
  };


setAnswer(character){
    this.setState({ answer: character });
}

componentDidMount() {
    this.setState({ characters: data});    
}

render() {

    const characterCards = this.state.characters.map(function(character, index) {
      return <Card character={character} key={index}></Card>;
    });

    return (
      <div>
        {characterCards}
        <GuessSelector characters={this.state.characters}></GuessSelector>
      </div>
    );
  }
}

export default GameContainer;


