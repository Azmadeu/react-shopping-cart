import React, {Component} from 'react';
import ModalWindow from "../../Containers/ModalWindowContainer";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onMouse: false,
      show: false,
      cartId: ''
    };
  }

  componentDidMount() {
    document.getElementById('container').addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.getElementById('container').removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClick = (event) => {
    this.setState({
      show: true,
      cartId: +event.target.id
    });
  };

  handleClickOutside = (event) => {
    if (event.target.className !== "btn") {
      this.props.closePanel();
    }
  };

  handleClose = () => {
    this.setState({show: false});
  };

  onMouse = () => {
    this.setState({onMouse: !this.state.onMouse})
  };

  totalPrice() {
    let result = 0;
    this.props.Basket.forEach(item => {
      result += item.price.total;
    });
    return "$ " + result.toFixed(2);
  }

  render() {
    const {
      PanelsVisibility,
      Basket,
      Counter,
      togglePanel
    } = this.props;
    const {
      show,
      cartId,
      onMouse
    } = this.state;
    return (
      <div
        className={
          PanelsVisibility
            ? "control-cart open"
            : "control-cart closed"
        }
        id="ignore"
      >
        <ModalWindow
          show={show}
          cartId={cartId}
          handleClose={this.handleClose}
        />
        <div
          className={
            PanelsVisibility
              ? "bag-open"
              : "bag-closed"
          }
          onClick={togglePanel}
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
                ? <p className="shelf-empty">
                  Add some product in the bag
                  <br/>
                  :)
                </p>
                : Basket.map(item => (
                  <div
                    className={
                      onMouse
                        ? "shelf-item mouseover"
                        : "shelf-item"
                    }
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
                      onMouseOver={this.onMouse}
                      onMouseOut={this.onMouse}
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
                            Quantity: {item.quantity}
                        </span>
                      </p>
                    </div>
                    <div className="price">
                      <p>
                        {"$ " + (item.price.total).toFixed(2)}
                      </p>
                    </div>
                  </div>
                )
                )
            }
          </div>
          <div className="footer">
            <div className="sub-price">
            <div className="sub">
              SUBTOTAL
            </div>
            <div className="price">
              <p className="total">
                {this.totalPrice()}
              </p>
            </div>
            </div>
            <div
              className="check"
              onClick={() => alert(this.totalPrice())}
            >
              Checkout
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel