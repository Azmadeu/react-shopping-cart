import {connect} from "react-redux";
import Carts from '../../Components/CartsList'
import {
  addCartAction,
  incAction,
  openPanelAction
} from "../../Actions";

const mapStateToProps = (state) => {
  return {
    panelsVisibility: state.panelsVisibility,
    Counter: state.Counter,
    Basket: state.Basket
  };
};

const mapDispatchToProps = {
  increment: incAction,
  openPanel: openPanelAction,
  addCart: addCartAction,
};

const CartsList = connect(mapStateToProps, mapDispatchToProps)(Carts);

export default CartsList;