import React, {Component} from 'react';
import {Sizes} from '../../data/index'

class Filter extends Component {

  handleClick = (event) => {
    if (event.target.className === 'checkmark') {
      event.target.className = 'checkmark active-btn';
      this.props.Filter(event.target.id);
    } else event.target.className = "checkmark"
  };

  render() {
    return (
      <div className="filter-bar">
        <h1 className="title">
          Sizes:
        </h1>
        <div className="filter">
          {
            Sizes.map(item => (
                <div
                  className="filter-btn"
                  key={item.size}
                >
                  <label>
                    <input
                      type="checkbox"
                      value={item.size}
                    />
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
      </div>
    )
  }
}

export default Filter