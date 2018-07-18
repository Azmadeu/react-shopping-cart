import React, {Component} from 'react';

class Panel extends Component {
  render() {
    const {
      panelsVisibility,
      Counter,
      Basket
    } = this.props;
    console.log(Basket);
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
                {Counter}
            </span>
          }
        </div>
        <div className="content">
          <div className="header">
            <div className="bag">
              <span className="quantity">
                {Counter}
              </span>
            </div>
            <span className="title">
                Bag
              </span>
          </div>
          <div className="carts-list">
            {
              Basket.length === 0
                ?
                <p className="shelf-empty">
                  Add some product in the bag
                  <br/>
                  :)
                </p>
                :
                Basket.map(item => (
                <div className="shelf-item" key={item.model}>
                  <div className="thumb">
                    <img
                      src={item.photo}
                      alt={item.model}
                    />
                  </div>
                  <div className="del" />
                  <div className="details">
                    <p className="title">
                      {item.model}
                    </p>
                    <p className="desc">
                      L | Kakayato nadpis ne ebu zachem
                      <br/>
                      Quantity: 1
                    </p>
                  </div>
                  <div className="price">
                    <p>{item.currency + " " + item.price.dollars + item.price.cents}</p>
                  </div>
                </div>
                ))
            }
          </div>
          <div className="footer">
            <div className="sub">
              SUBTOTAL
            </div>
            <div className="price">
              <p className="total">
                {Basket.reduce}0.00$
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

export default Panel