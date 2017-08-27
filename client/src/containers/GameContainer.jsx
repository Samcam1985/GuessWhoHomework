import React from 'react';
import ReactDOM from 'react-dom';
import GuessSelector from '../components/GuessSelector.jsx'; 
import QuestionSelector from '../components/QuestionSelector.jsx';
import Card from '../components/Card.jsx';


var data = require('../characters.json');
var questionsData = require('../questions.json');

class GameContainer extends React.Component {
  constructor(props){
    super(props);
    this.handleGuessSubmit = this.handleGuessSubmit.bind(this);
    this.handleAskQuestionSubmit = this.handleAskQuestionSubmit.bind(this);
    this.state = { characters: [], questions: [], characterToGuess: null};
  };


handleGuessSubmit(characterIndex){
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

handleAskQuestionSubmit(questionIndex){
  var char = this.state.characterToGuess;
  const questionAsked = questionsData.filter((question) => question.id == questionIndex);

    var question_answer;
    switch(questionAsked[0].property)
    {
      case "gender":
          if(questionAsked[0].value == char.gender)
          {
            question_answer = (
               <div><span>Yes</span></div>
               );
          }
          else{
            question_answer = (
               <div><span>No</span></div>
               );
          }
          break;
      case "hairColour":
          if(questionAsked[0].value == char.hairColour)
          {
            question_answer = (
               <div><span>Yes</span></div>
               );
          }
          else{
            question_answer = (
               <div><span>No</span></div>
               );
          }
          break;
      case "house":
          if(questionAsked[0].value == char.house)
          {
            question_answer = (
               <div><span>Yes</span></div>
               );
          }
          else{
            question_answer = (
               <div><span>No</span></div>
               );
          }
          break;
      default:
          question_answer = (
                     <div><span>No</span></div>
                     );
        break;
    }

    ReactDOM.render(
      question_answer, 
      document.getElementById('question_answer')
      );
}


componentDidMount() {
    this.setState({ characters: data});
    this.setState({ questions: questionsData });
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
        <QuestionSelector questions={this.state.questions} onAskQuestionSubmit={this.handleAskQuestionSubmit}></QuestionSelector>
        <div id='question_answer'></div>
        <GuessSelector characters={this.state.characters} onGuessSubmit={this.handleGuessSubmit}></GuessSelector>
        <div id='answer'></div>
      </div>
    );
  }
}

export default GameContainer;


