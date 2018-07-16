import React, {Component} from 'react';

class CartsList extends Component {
  render() {
    const carts = this.props.Carts;
    return (
      <div className="container">
        <div className="header">
          <small className="products-found">
            <span>
              "{this.props.Carts.length}" Product(s) found.
            </span>
          </small>
        </div>
        {
          carts.map(cart => (
              <div
                className="cart"
                key={cart.price.model}
              >
                <img src={cart.photo}/>
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
                <div className="btn">
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

export default CartsList;