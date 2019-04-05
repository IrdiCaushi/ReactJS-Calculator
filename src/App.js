import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = { 
      totalSum: 0,
      firstNr: 0,
      secondNr: 0
    };

    this.num1Change = this.num1Change.bind(this);
    this.num2Change = this.num2Change.bind(this);
  }
    num1Change(event) {
      console.log(event.target.value);
      this.setState({ num1: Number(event.target.value) });
    }
    num2Change(event) {
      console.log(typeof event.target.value);
      this.setState({ num2: Number(event.target.value) });
    }
    sum =(event)=> {
      let sumOfNumbers = this.state.num1 + this.state.num2
      this.setState({totalSum: sumOfNumbers })
    }



  render() {
    return(
      <form>
          <input type="number" onChange={this.num1Change} />
          <input type="number" onChange={this.num2Change}/>
          <input type="button" onClick={this.sum} value="Add two values"/>
          <input type='text' value={this.state.totalSum} readOnly/>
     </form>
    )
    
  }
}

export default App;
