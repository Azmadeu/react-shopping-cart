import React, {Component} from 'react';
import banner from './asserts/img/banner.jpg';
import CartsList from './Components/CartsList/index';
import ControlledPanel from './Components/TogglePanel/index';
import Filter from './Components/filterBar/index';
import {Carts} from './data/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img
          className="banner"
          src={banner}/>
        <Filter/>
        <CartsList Carts={Carts} />
        <ControlledPanel/>
      </div>
    );
  }
}

export default App;
