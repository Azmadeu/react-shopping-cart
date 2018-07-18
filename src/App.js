import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/index';
import { Carts } from './data/index';
import CartsList from './Components/CartsList/index';
import ControlledPanel from './Components/TogglePanel/index';
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
        {/*<div className="header">*/}
          {/*<small className="products-found">*/}
            {/*<span>*/}
              {/*"{Carts.length}" Product(s) found.*/}
            {/*</span>*/}
          {/*</small>*/}
        {/*</div>*/}
        <Filter/>
        <CartsList Carts={Carts} />
        <ControlledPanel/>
      </div>
      </Provider>
    );
  }
}

export default App;
