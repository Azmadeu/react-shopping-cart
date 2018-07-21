import React, {Component} from 'react';
import {Sizes} from '../../data'

class Filter extends Component {
  state = {
    picked: []
  };

  handleClick = (event) => {


    if (event.target.className === 'checkmark') {
      this.addSize(event.target.id);
      event.target.className = 'checkmark active-btn';
    } else {
      this.removeSize(event.target.id);
      event.target.className = "checkmark";
    }
  };

  sortElems(SortType) {
    this.props.Filter(this.state.picked);
    switch (SortType) {
      case 'toLowest':
        this.props.sortToLowest();
        break;
      case 'toHighest':
        this.props.sortToHighest();
        break;
      case 'select':
        this.props.defaultSort();
        break;
      default:
        this.props.defaultSort();
        break;
    }
  }

  addSize(elem) {
    this.state.picked.push(elem);
    this.sortElems(this.props.SortType);
  }

  removeSize(elem) {
    this.state.picked.splice([...this.state.picked].indexOf(elem), 1);
    this.sortElems(this.props.SortType);
  }

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