import Panel from '../../Components/TogglePanel/index'
import {connect} from "react-redux";
import {
  removeCartAction,
  isOpenAction,
  decAction
} from "../../Actions/index";

const mapStateToProps = (state) => {
  return {
    panelsVisibility: state.panelsVisibility,
    Counter: state.Counter,
    Basket: state.Basket
  };
};

const mapDispatchToProps = {
  decrement: decAction,
  isOpen: isOpenAction,
  removeCart: removeCartAction
};


const ControlledPanel = connect(mapStateToProps, mapDispatchToProps)(Panel);

export default ControlledPanel