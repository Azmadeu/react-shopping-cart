import React, {Component} from 'react';
import banner from './asserts/img/banner.jpg';
import CartsList from './Components/CartsList/index';
import ControlledPanel from './Components/TogglePanel/index';
import Sizes from './Components/OrderBy/index';
import {Carts} from './data/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img
          className="banner"
          src={banner}/>
        <CartsList Carts={Carts} />
        {/*<Sizes /> */}
        <ControlledPanel/>
        <footer>Coded by Serge Makarov</footer>
      </div>
    );
  }
}

export default App;
