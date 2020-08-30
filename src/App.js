import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toyData : []
  }

  componentDidMount(){
    fetch("http://localhost:3000/toys")
      .then(response => response.json())
      .then(toyArray => this.setState({...this.state, toyData : toyArray} ))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  submitHandler = (newToyObject) => {
    //let newToyArray = {...this.state, toyData: newToyObject}
    
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(newToyObject)
    }
    
    fetch("http://localhost:3000/toys", configObj)
      .then(response => response.json())
      .then(newToyObj => this.setState({...this.state, toyData: [...this.state.toyData, newToyObj]}))
  }

  deleteHandler = (id) => {
    
    fetch(`http://localhost:3000/toys/${id}`, {method: "DELETE"} )
      .then(
        fetch("http://localhost:3000/toys")
          .then(response => response.json())
          .then(()=> {
            fetch("http://localhost:3000/toys")
              .then(response => response.json())
              .then(toyArray => this.setState({...this.state, toyData : toyArray} ))
          })
      )
  }

  likeHandler = (likedObj) => {
    let likedId = likedObj.id
    let newLikeCount = likedObj.likes + 1

    let configObj = {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({likes: newLikeCount})
    }

    fetch(`http://localhost:3000/toys/${likedId}`, configObj)
      .then(response => response.json())
      .then(() => fetch("http://localhost:3000/toys")
      .then(response => response.json())
      .then(toyArray => this.setState({...this.state, toyData : toyArray} )) )

  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm submitHandler={this.submitHandler} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toyData={this.state.toyData} deleteHandler={this.deleteHandler} likeHandler={this.likeHandler} />
      </>
    );
  }

}

export default App;
