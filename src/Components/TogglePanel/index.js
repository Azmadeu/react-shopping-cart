import React, { Component } from 'react';

class ControlledPanel extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleClick = (event) => {
      this.setState({
        open: !this.state.open,
      });
  };

  render() {
    return (
      <div className={this.state.open ? "control-cart open" : "control-cart closed"}>
          <div className={this.state.open ? "bag-open" : "bag-closed"} onClick={this.handleClick}>
            {this.state.open && "X"}
          </div>
        <div className="content">
          <div className="header">
            <div className="bag">
            </div>
              <span className="title">
                Bag
              </span>
          </div>
          <div className="carts-list">
            <div className="item">
              Cart
            </div>
            <div className="item">
              Cart
            </div>
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

export default ControlledPanel