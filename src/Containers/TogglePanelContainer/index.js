import Panel from '../../Components/TogglePanel/index'
import {connect} from "react-redux";
import {
  removeCartAction,
  isOpenAction,
} from "../../Actions/index";

const mapStateToProps = (state) => {
  return {
    PanelsVisibility: state.PanelsVisibility,
    Basket: state.Basket
  };
};

const mapDispatchToProps = {
  isOpen: isOpenAction,
  removeCart: removeCartAction
};


const ControlledPanel = connect(mapStateToProps, mapDispatchToProps)(Panel);

export default ControlledPanel