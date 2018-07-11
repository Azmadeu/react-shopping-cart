import React, { Component } from 'react';
import banner from './img/banner.jpg';
import Product from 'ProductsList';
import Panel from 'togglePanel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="banner" src={banner} />
        <Product />
        <Panel/>
        <footer>Coded by Serge Makarov</footer>
      </div>
    );
  }
}

export default App;
