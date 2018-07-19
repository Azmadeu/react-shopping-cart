import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from './Reducers';
import {Carts} from './Reducers/FilterSize';
import CartsList from './Containers/CartsListContainer';
import ControlledPanel from './Containers/TogglePanelContainer';
import FilterBar from './Containers/FilterBarContainer';
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
            <FilterBar/>
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