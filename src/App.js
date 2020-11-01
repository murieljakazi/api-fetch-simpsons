import './App.css';
import SimpsonCard from './components/simpsonCard';
import React from 'react';

class App extends React.Component{

  state = {
    simpson : null
  }

  componentDidMount() {
    setTimeout(() =>
    this.fetchQuote(), 1000
    )
  }

  fetchQuote = () => {
      fetch('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.json())
      .then(data => {
          this.setState({simpson : data[0]})
      })
  }

  render() {
    console.log(this.state.simpson)
  

  return (
    <div className="App">
      {this.state.simpson ?
      <SimpsonCard  simpson={this.state.simpson}/> :
      <p>Loading...</p>
      }
      <input type="button" value="New Simpson" onClick={this.fetchQuote}/>
    </div>
  );
  }
}

export default App;
