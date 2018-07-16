import React, {Component} from 'react';
import {Sizes} from '../../data/index'
import Sort from '../OrderBy/index'

class Filter extends Component {
  render() {
    return (
      <div className="filter-bar">
        <div className="filter">
        <h1 className="title">Sizes:</h1>
        {
          Sizes.map(item => (
              <div className="filter-btn">
                <label>
                  <input type="checkbox" value={item.size} key={item.size}/>
                  <span className="checkmark">{item.size}</span>
                </label>
              </div>
            )
          )
        }
        </div>
        <Sort />
      </div>
    )
  }
}

export default Filter