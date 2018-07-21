import React, {Component} from 'react';
import ModalWindow from "../../Containers/ModalWindowContainer";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onMouse: false,
      total: 0,
      show: false
    };
  }

  componentDidMount() {
    document.getElementById('container').addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.getElementById('container').removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClick = (event) => {
    const removedElem = this.props.Basket.find(item =>
      +item.id === +event.target.id
    );
    this.props.Counter >= 0 && this.props.decrement(removedElem.quantity);
    this.props.removeCart(event.target.id);
    this.setState(prevState => ({onMouse: !prevState.onMouse, show: true}));
  };

  handleClose = () => {
    this.setState({show: false});
  };

  handleShow = () => {
    console.log('SHOW');
    this.setState({show: true});
  };

  handleClickOutside = (event) => {
    if (event.target.className !== "btn") {
      this.props.closePanel();
    }
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
                    <ModalWindow
                      show={this.state.show}
                      handleClose={this.handleClose}
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
                ))
            }
          </div>
          <div className="footer">
            <div className="sub">
              SUBTOTAL
            </div>
            <div className="price">
              <p className="total">
                {this.totalPrice()}
              </p>
            </div>
            <div className="check" onClick={() => alert(this.totalPrice())}>
              Checkout
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel