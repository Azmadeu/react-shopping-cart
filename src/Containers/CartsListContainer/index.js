import {connect} from "react-redux";
import Carts from '../../Components/CartsList'
import {
  addCartAction,
  openPanelAction,
  filterAction,
  incProductAction,
  decProductAction
} from "../../Actions";


const mapStateToProps = (state) => {
  return {
    PanelsVisibility: state.PanelsVisibility,
    Basket: state.Basket,
    Products: state.FilterReducer,
    Counter: state.Counter
  };
};

const mapDispatchToProps = {
  openPanel: openPanelAction,
  addCart: addCartAction,
  Filter: filterAction,
  increment: incProductAction,
  decrement: decProductAction
};

const CartsList = connect(mapStateToProps, mapDispatchToProps)(Carts);

export default CartsList;