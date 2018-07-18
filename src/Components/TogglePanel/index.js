import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "../../Redux/index";

class Panel extends Component {
  render() {
    const {panelsVisibility} = this.props.reducer;
    return (
      <div className={panelsVisibility ? "control-cart open" : "control-cart closed"}>
        <div
          className={panelsVisibility ? "bag-open" : "bag-closed"}
          onClick={this.props.isOpen}
        >
          {
            panelsVisibility ?
              "X"
              :
            <span className="quantity">
                {this.props.reducer.Counter}
            </span>
          }
        </div>
        <div className="content">
          <div className="header">
            <div className="bag">
              <span className="quantity">{this.props.reducer.Counter}</span>
            </div>
            <span className="title">
                Bag
              </span>
          </div>
          <div className="carts-list">
            <p className="shelf-empty">
              Add some product in the bag
              <br />
              :)
            </p>
          </div>
          <div className="footer">
            <div className="sub">
              SUBTOTAL
            </div>
            <div className="price">
              <p className="total">
                0.00$
              </p>
            </div>
            <div className="check">
              Checkout
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const ControlledPanel = connect(mapStateToProps, mapDispatchToProps)(Panel);

export default ControlledPanel