/* eslint-disable */
import React, { Component } from 'react';
import SocialCard from './SocialCard';
import Header from './Header';
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrls: [  
        "http://placekitten.com/250/250",
        "http://placekitten.com/251/250",
        "http://placekitten.com/250/251",
        "http://placekitten.com/252/250",
        "http://placekitten.com/250/252",
        "http://placekitten.com/250/249"
      ]
    };
  }
  render() {
    const cards = this.state.imageUrls.map((url) => <SocialCard imageSrc={url} key={url} />)
    return (
      <div className="appContainer">
        <Header />
        {cards}
      </div>
    );
  }
}

export default App;
