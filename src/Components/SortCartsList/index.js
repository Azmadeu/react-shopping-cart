import React, {Component} from 'react'

class Sort extends Component {
  handleChange = (event) => {
    switch(event.target.value) {
      case 'lowestprice':
        this.props.changeSortType('toHighest');
        this.props.sortToHighest();
        break;
      case 'highestprice':
        this.props.changeSortType('toLowest');
        this.props.sortToLowest();
        break;
      case 'select':
        this.props.changeSortType('select');
        this.props.defaultSort();
        break;
      default:
        this.props.changeSortType('select');
        this.props.defaultSort();
        break;
    }
  };

  render() {
    return (
      <div className="header">
        <small className="products-found">
          <span>
            "{this.props.Products.length}" Product(s) found.
          </span>
        </small>
        <div className="sort">
          <span>Order by</span>
          <select id="select-sort" onChange={this.handleChange}>
            <option value="Select"> Select</option>
            <option value="lowestprice">Lowest to highest</option>
            <option value="highestprice">Highest to lowest</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Sort;