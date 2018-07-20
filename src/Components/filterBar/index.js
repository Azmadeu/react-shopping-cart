import React, {Component} from 'react';
import {Sizes} from '../../data'

class Filter extends Component {
  state = {
    picked: []
  };

  handleClick = (event) => {
    if (event.target.className === 'checkmark') {
        this.state.picked.push(event.target.id);
        this.props.Filter(this.state.picked);
      event.target.className = 'checkmark active-btn';
    } else {
      event.target.className = "checkmark";
      this.state.picked.splice([...this.state.picked].indexOf(event.target.id), 1);
      this.props.Filter(this.state.picked)
    }
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