import React, {Component} from 'react';
class Carts extends Component {

  handleClick = (event) => {
    this.props.addCart(event.target.id);
    this.props.openPanel();
  };
  render() {
    const carts = this.props.Products[0];
    return (
      <div
        className="container"
      >
        {
          carts.map(cart => (
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