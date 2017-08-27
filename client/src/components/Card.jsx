import React from 'react';

class Card extends React.Component {

  constructor(props){
    super(props);
    this.id = this.props.character.id;
    this.name = this.props.character.name;
    this.house = this.props.character.house;
    this.gender = this.props.character.gender;
    this.hairColour = this.props.character.hairColour;
    this.facialHair = this.props.character.facialHair;
    this.img = this.props.character.img;
    
  }

  render() {
    return (
      <div className="cardContainer">
        <img src={this.img} />
        <div className="cardName">{this.name}</div>
      </div>
    );
  }
}

export default Card;