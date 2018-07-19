import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from './Reducers';
import {Carts} from './Reducers/FilterSize';
import CartsList from './Containers/CartsListContainer';
import ControlledPanel from './Containers/TogglePanelContainer';
import FilterBar from './Containers/FilterBarContainer';
import banner from './asserts/img/banner.jpg'
import Sort from './Components/OrderBy'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div
          className="App"
        >
          <img
            className="banner"
            src={banner}
            alt="banner"
          />
          <div
            className="main"
            id="container"
          >
            <FilterBar/>
            <div className="column">
              <Sort Carts={Carts}/>
              <CartsList />
            </div>
          </div>
          <ControlledPanel/>
        </div>
      </Provider>
    );
  }
}

export default App;

