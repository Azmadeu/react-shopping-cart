import React, {Component} from 'react';
import {Sizes} from '../../data'

class Filter extends Component {
  state = {
    picked: []
  };

  filterChange = (event) => {
    if (event.target.className === 'checkmark') {
      this.addSize(event.target.id);
      event.target.className = 'checkmark active-btn';
    } else {
      this.removeSize(event.target.id);
      event.target.className = "checkmark";
    }
  };

  sortElems(SortType) {
    const {
      Filter,
      sortToLowest,
      sortToHighest,
      defaultSort
    } = this.props;

    Filter(this.state.picked);
    switch (SortType) {
      case 'toLowest':
        sortToLowest();
        break;
      case 'toHighest':
        sortToHighest();
        break;
      case 'select':
        defaultSort();
        break;
      default:
        defaultSort();
        break;
    }
  }

  addSize(elem) {
    this.state.picked.push(elem);
    this.sortElems(this.props.SortType);
  }

  removeSize(elem) {
    const { picked } = this.state;
    picked.splice([...picked].indexOf(elem), 1);
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
                      onClick={this.filterChange}
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
          </div>
        </div>
      </div>
    )
  }
}

export default Filter