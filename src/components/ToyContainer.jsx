import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component {
  

  createToyCards = () => {
    return this.props.toyData.map(toyObj => <ToyCard key={toyObj.id} toyObject={toyObj} deleteHandler={this.props.deleteHandler} likeHandler={this.props.likeHandler} />)
  }



  render() {
    return(
    
    <div id="toy-collection">
      {this.createToyCards()}
    </div>
  );
  }
}

export default ToyContainer;
