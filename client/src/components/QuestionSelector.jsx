import React from 'react';

class QuestionSelector extends React.Component {

  constructor(props){
    super(props);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleQuestionSubmit = this.handleQuestionSubmit.bind(this);
    this.state = {
      selectQuestionValue: this.props.questions[0]
    };
  }

  handleQuestionChange(event){
    this.setState({selectQuestionValue: event.target.value });
  }

  handleQuestionSubmit(event) {
    event.preventDefault();
    this.props.onAskQuestionSubmit(this.state.selectQuestionValue);
  }

  render() {
    var options = this.props.questions.map((question, index) => {
      return <option value={index} key={index}>{question.text}</option>;
    });

    return (
      <form onSubmit={this.handleQuestionSubmit}>
      <div>
        <select id="questions" onChange={this.handleQuestionChange}>
          { options }
        </select>
      </div>
      <div>
        <br />
        <input type="submit" value="Ask" />
      </div>
      </form>
    );
  }
}

export default QuestionSelector;