import React, {Component} from 'react'

class Sort extends Component {
  render() {
    return (
      <div className="header">
        <small className="products-found">
          <span>
            "{this.props.Carts.length}" Product(s) found.
          </span>
        </small>
        <div className="sort">
          <span>Order by</span>
          <select>
            <option value="Select"> Select</option>
            <option value="lowestprice"> Lowest to highest</option>
            <option value="highestprice"> Highest to lowest</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Sort;