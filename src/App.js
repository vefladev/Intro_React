import React, { Component } from 'react';
import './App.css';
import Membre from './components/Membre';
import Button from './components/Button';

const famille = {
  membre1: {
    nom: 'Flavien',
    age: 26
  },
  membre2: {
    nom: 'Anthony',
    age: 33
  },
  membre3: {
    nom: 'Nicolas',
    age: 42
  },
  membre4: {
    nom: 'Olivier',
    age: 50
  }
}

class App extends Component {

  state = {
    famille,
    isShow: false
  }

  handleClick = (num) => {
    const famille = { ...this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }

  handleChange = (event, id) => {
    const famille = { ...this.state.famille }
    const nom = event.target.value
    famille[id].nom = nom
    this.setState({ famille })
  }

  cacherNom = id => {
    const famille = { ...this.state.famille }
    famille[id].nom = 'X'
    this.setState({ famille })
  }

  handleShowDescription= () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }


  render () {  
    const {famille, isShow} = this.state

    let description = null 

    if(isShow) {
     description = (

      <strong> J'ai 50 ans </strong>
     )
    }

    const liste = Object.keys(famille)
      .map(membre => (
        <Membre 
        key={membre}
        handleChange ={event => this.handleChange(event, membre)}
        cacherNom = {() => this.cacherNom(membre)}
        age ={famille[membre].age}
        nom={famille[membre].nom}/> 
      ))
    



  return (
    <div className="App">
      <h1>Ma super App</h1>
      
      { liste }

       {description}

       <button onClick={ this.handleShowDescription }>
       {
         isShow ? 'Cacher' : 'Montrer' 
       }
       </button>
      <Button
      vieillir={() => this.handleClick(2)} />
    </div>
    
  );
}

}

export default App;
