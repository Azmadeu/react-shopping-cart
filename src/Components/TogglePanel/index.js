import React, {Component} from 'react';

class Panel extends Component {
  state = {
    onMouse: false,
    total: 0
  };

  componentDidMount() {
    document.getElementById('container').addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.getElementById('container').removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (event.target.className !== "btn") {
      this.props.closePanel();
    }
  };

  handleClick = (event) => {
    this.props.removeCart(event.target.id);
    this.props.Counter >= 0 && this.props.decrement();
    this.setState(prevState => ({
      onMouse: !prevState.onMouse
    }));
  };

  onMouseOver = () => {
    this.setState(prevState => ({
      onMouse: !prevState.onMouse
    }))
  };

  onMouseOut = () => {
    this.setState(prevState => ({
      onMouse: !prevState.onMouse
    }))
  };

  render() {
    const {
      PanelsVisibility,
      Basket,
      Counter
    } = this.props;
    return (
      <div
        className={PanelsVisibility ? "control-cart open" : "control-cart closed"}
        id="ignore"
      >
        <div
          className={PanelsVisibility ? "bag-open" : "bag-closed"}
          onClick={this.props.togglePanel}
        >
          {
            PanelsVisibility ?
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
                  <div
                    className={this.state.onMouse ? "shelf-item mouseover" : "shelf-item"}
                    key={item.id}
                  >
                    <div className="thumb">
                      <img
                        src={item.photo}
                        alt={item.model}
                      />
                    </div>
                    <div
                      className="del"
                      id={item.id}
                      onMouseOver={this.onMouseOver}
                      onMouseOut={this.onMouseOut}
                      onClick={this.handleClick}
                    />
                    <div className="details">
                      <p className="title">
                        {item.model}
                      </p>
                      <p className="desc">
                        L | Preto com listras brancas
                        <br/>
                        <span id="Quantity">
                          Quantity: 1
                        </span>
                      </p>
                    </div>
                    <div className="price">
                      <p>
                        {item.currency + " " + item.price.dollars + item.price.cents}
                      </p>
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
                {
                  Basket.length === 0
                    ?
                    "$ 0.00"
                    :
                    (() => {
                      let result = 0;
                      Basket.forEach(item => {
                        result += +(item.price.dollars + item.price.cents);
                      });
                      return "$ " + result.toFixed(2);
                    })()
                }
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