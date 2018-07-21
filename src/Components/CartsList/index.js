import React, {Component} from 'react';

class Carts extends Component {

  handleClick = (event) => {
    this.props.addCart(event.target.id);
    this.props.openPanel();
    this.props.increment();
  };

  render() {
    return (
      <div
        className="content-container"
      >
        {
          this.props.Products.map(cart => (
              <div
                className="cart"
                key={cart.model}
              >
                <div className="free-shipping">
                  Free shipping
                </div>
                <img
                  src={cart.photo}
                  alt="model"
                />
                <div className="title">
                  {cart.model}
                </div>
                <div className="price">
                  <div>
                    <small>
                      {cart.currency}
                    </small>
                    <b>
                      {cart.price.dollars}
                    </b>
                    <span>
                      {cart.price.cents}
                      </span>
                  </div>
                  <div className="installment">
                    {cart.installment.num}
                    <span style={{fontWeight: 'bold'}}>
                      {cart.installment.price}
                    </span>
                  </div>
                </div>
                <div className="quantity-holder">
                  <span className="minus x-quantity">-</span>
                  <span className="input x-quantity">0</span>
                  <span className="plus x-quantity">+</span>
                </div>
                <div
                  className="btn"
                  id={cart.id}
                  onClick={this.handleClick}
                >
                  Add to cart
                </div>
              </div>
            )
          )
        }
      </div>
    )
  }
}

export default Carts