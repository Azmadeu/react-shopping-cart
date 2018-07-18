import {connect} from "react-redux";
import Carts from '../../Components/CartsList/index'
import {
  addCartAction,
  incAction,
  openPanelAction
} from "../../Actions/index";

const mapStateToProps = (state) => {
  return {
    reducer: state
  };
};

const mapDispatchToProps = {
  increment: incAction,
  openPanel: openPanelAction,
  addCart: addCartAction,
};

const CartsList = connect(mapStateToProps, mapDispatchToProps)(Carts);

export default CartsList;