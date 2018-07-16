import React, { Component } from 'react'

class Sort extends Component {
  render() {
    return(
      <div className="sort">
        Order by
        <select>
          <option value="Select"> Select</option>
          <option value="lowestprice"> Lowest to highest</option>
          <option value="highestprice"> Highest to lowest</option>
        </select>
      </div>
    )
  }
}

export default Sort;