// import { render } from '@testing-library/react';
import React from 'react';

class SimpsonCard extends React.Component {

    state = {
        simpson : ""
    }
    componentDidMount() {
        this.fetchQuote()
    }

    fetchQuote = () => {
        fetch('https://simpsons-quotes-api.herokuapp.com/quotes')
        .then(response => response.json())
        .then(data => {
            this.setState({simpson : data[0]})
        })
    }

    render() {
        console.log(this.state);
         return(
             <div>
                 <h1>Simpson Quotes</h1>
                 <p>{this.state.simpson.character}</p>
                 <img src={this.state.simpson.image}/>
                 <p>{this.state.simpson.quote}</p>
                 <input type="button" value="New Simpson" onClick={this.fetchQuote}/>
             </div>
         )
    }
}

export default SimpsonCard;