import React, { Component } from 'react';
import banner from './asserts/img/banner.jpg';
import Product from './Components/CartsList/index';
import ControlledPanel from './Components/TogglePanel/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="banner" src={banner} />
        <Product />
        <ControlledPanel />
        <footer>Coded by Serge Makarov</footer>
      </div>
    );
  }
}

export default App;
