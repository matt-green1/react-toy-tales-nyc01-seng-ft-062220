import React, { Component } from 'react';

class ToyForm extends Component {
  state = {
    name : "",
    image: "",
    likes: 0
  }

  changeHelper = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHelper = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({
      name : "",
      image: "",
      likes: 0
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHelper} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={this.changeHelper} value={this.state.name} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={this.changeHelper} value={this.state.image} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
