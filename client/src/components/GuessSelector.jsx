import React from 'react';

class GuessSelector extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    var options = this.props.characters.map((character, index) => {
      return <option value={index} key={index}>{character.name}</option>;
    });

    return (
      <form>
      <div>
        <select id="characters">
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