import {connect} from "react-redux";
import Carts from '../../Components/CartsList'
import {
  addCartAction,
  openPanelAction,
  incProductAction,
} from "../../Actions";


const mapStateToProps = (state) => {
  return {
    Products: state.FilterReducer
  };
};

const mapDispatchToProps = {
  openPanel: openPanelAction,
  addCart: addCartAction,
  increment: incProductAction
};

const CartsList = connect(mapStateToProps, mapDispatchToProps)(Carts);

export default CartsList;