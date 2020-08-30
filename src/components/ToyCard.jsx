import React, { Component } from 'react';

class ToyCard extends Component {


  deleteHelper = () => {
    this.props.deleteHandler(this.props.toyObject.id)
  }

  likeHelper = () => {
    this.props.likeHandler(this.props.toyObject)
  }

  render() {
    
    return (
      <div className="card">
        <h2>{this.props.toyObject.name}</h2>
        <img src={this.props.toyObject.image} alt={this.props.toyObject.name} className="toy-avatar" />
        <p>{this.props.toyObject.likes} Likes </p>
        <button onClick={this.likeHelper} className="like-btn">Like {'<3'}</button>
        <button onClick={this.deleteHelper} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
