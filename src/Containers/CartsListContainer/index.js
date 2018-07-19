import {connect} from "react-redux";
import Carts from '../../Components/CartsList'
import {
  addCartAction,
  openPanelAction,
  filterAction
} from "../../Actions";


const mapStateToProps = (state) => {
  return {
    PanelsVisibility: state.PanelsVisibility,
    Basket: state.Basket,
    Products: state.FilterReducer
  };
};

const mapDispatchToProps = {
  openPanel: openPanelAction,
  addCart: addCartAction,
  Filter: filterAction
};

const CartsList = connect(mapStateToProps, mapDispatchToProps)(Carts);

export default CartsList;