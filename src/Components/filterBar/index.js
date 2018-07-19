import React, {Component} from 'react';
import {Sizes} from '../../data/index'
import Sort from '../OrderBy/index'

class Filter extends Component {

  handleClick = (event) => {
    if (event.target.className === 'checkmark') {
      event.target.className = 'checkmark active-btn'
    } else event.target.className = "checkmark"
  };

  render() {
    return (
      <div className="filter-bar">
        <div className="filter">
          <h1 className="title">
            Sizes:
          </h1>
          {
            Sizes.map(item => (
                <div
                  className="filter-btn"
                  key={item.size}
                >
                  <label>
                    <input type="checkbox" value={item.size}/>
                    <span
                      id={item.size}
                      className="checkmark"
                      onClick={this.handleClick}
                    >
                    {item.size}
                  </span>
                  </label>
                </div>
              )
            )
          }
          <div className="star-container">
            <small>
              Leave a star on Github if this repository was useful :)
            </small>
            {/*<span>button</span>*/}
          </div>
        </div>

        <Sort/>
      </div>
    )
  }
}

export default Filter