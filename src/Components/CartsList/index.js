import React, { Component } from 'react';

class CartsList extends Component {
  render() {
    return (
      <div className="container">
        {
          this.props.Carts.map(cart => (
              <div className="cart">
                <img src={cart.photo}  />
                <div className="title">
                  {cart.model}
                  </div>
                <div className="price">
                  <div>
                    <small>{cart.currency}</small>
                    <b>{cart.price.dollars + cart.price.cents}</b>
                  </div>
                  <div className="installment">
                    {cart.installment}
                  </div>
                </div>
                <div className="btn">Add to cart</div>
              </div>
            )
          )
        }
      </div>
    )
  }
}

export default CartsList;