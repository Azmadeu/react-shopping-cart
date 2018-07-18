import React, {Component} from 'react';

class Carts extends Component {
  handleClick = (event) => {
    this.props.addCart(event.target.id);
    this.props.increment();
    this.props.openPanel();
  };

  render() {
    const carts = this.props.Carts;
    return (
      <div className="container">
        {
          carts.map(cart => (
              <div
                className="cart"
                key={cart.model}
              >
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
                      {cart.price.dollars + cart.price.cents}
                    </b>
                  </div>
                  <div className="installment">
                    {cart.installment}
                  </div>
                </div>
                <div className="btn" id={cart.model} onClick={this.handleClick}>
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