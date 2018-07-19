import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from './Reducers';
import CartsList from './Containers/CartsListContainer';
import ControlledPanel from './Containers/TogglePanelContainer';
import FilterBar from './Containers/FilterBarContainer';
import banner from './asserts/img/banner.jpg'
import SortList from './Containers/SortCartsListContainer'
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
              <SortList />
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

