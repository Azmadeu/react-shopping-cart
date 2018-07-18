import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from './Reducers/index';
import {Carts} from './data/index';
import CartsList from './Containers/CartsListContainer/index';
import ControlledPanel from './Containers/TogglePanelContainer/index';
import Filter from './Components/filterBar/index';
import banner from './asserts/img/banner.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <img
            className="banner"
            src={banner}
            alt="banner"
          />
          <div className="main">
            <Filter/>
            <CartsList Carts={Carts}/>
          </div>
          <ControlledPanel/>
        </div>
      </Provider>
    );
  }
}

export default App;

// <div className="header">
//   <small className="products-found">
// <span>
// "{Carts.length}" Product(s) found.
// </span>
//   </small>
// </div>