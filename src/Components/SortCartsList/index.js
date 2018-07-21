import React, {Component} from 'react'

class Sort extends Component {

  handleChange = (event) => {
    const {
      sortToHighest,
      changeSortType,
      sortToLowest,
      defaultSort
    } = this.props;
    switch (event.target.value) {
      case 'lowestprice':
        changeSortType('toHighest');
        sortToHighest();
        break;
      case 'highestprice':
        changeSortType('toLowest');
        sortToLowest();
        break;
      case 'select':
        changeSortType('select');
        defaultSort();
        break;
      default:
        changeSortType('select');
        defaultSort();
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