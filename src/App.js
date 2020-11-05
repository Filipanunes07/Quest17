
import React from "react";
import axios from 'axios';
import QuoteCard from "./component/QuoteCard"
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartoon:{}
    };
    this.getCartoon = this.getCartoon.bind(this);
  }
  

  getCartoon() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          cartoon: data[0]
        });
    });
  }

  render() {
    return (
      <div className="App">
        <QuoteCard cartoon={this.state.cartoon} />
        <button type="button" onClick={this.getCartoon}>Get cartoon</button>
      </div>
    );
  }
}

export default App;
