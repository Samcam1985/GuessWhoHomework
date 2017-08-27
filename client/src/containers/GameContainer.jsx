import React from 'react';
import GuessSelector from '../components/GuessSelector.jsx'; 

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
    return (
      <div>
        <GuessSelector characters={this.state.characters}></GuessSelector>
      </div>
    );
  }
}

export default GameContainer;


