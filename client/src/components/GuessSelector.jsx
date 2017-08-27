import React from 'react';

class GuessSelector extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      selectValue: this.props.characters[0]
    };
  }

  handleChange(event){
    this.setState({selectValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onGuessSubmit(this.state.selectValue);
  }

  render() {
    var options = this.props.characters.map((character, index) => {
      return <option value={index} key={index}>{character.name}</option>;
    });

    return (
      <form onSubmit={this.handleSubmit}>
      <div>
        <select id="characters" onChange={this.handleChange}>
          { options }
        </select>
      </div>
      <div>
        <br />
        <input type="submit" value="Guess" />
      </div>
      </form>
    );
  }
}

export default GuessSelector;