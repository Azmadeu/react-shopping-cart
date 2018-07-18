import {connect} from "react-redux";
import Carts from '../../Components/CartsList'
import {
  addCartAction,
  openPanelAction
} from "../../Actions";

const mapStateToProps = (state) => {
  return {
    panelsVisibility: state.panelsVisibility,
    Basket: state.Basket
  };
};

const mapDispatchToProps = {
  openPanel: openPanelAction,
  addCart: addCartAction,
};

const CartsList = connect(mapStateToProps, mapDispatchToProps)(Carts);

export default CartsList;