import Window from '../../Components/ModalWindow'
import {connect} from "react-redux";
import {
  removeCartAction,
  decProductAction
} from "../../Actions/index";

const mapStateToProps = (state) => {
  return {
    Basket: state.Basket,
    Counter: state.Counter
  };
};

const mapDispatchToProps = {
  removeCart: removeCartAction,
  decrement: decProductAction
};


const ModalWindow = connect(mapStateToProps, mapDispatchToProps)(Window);

export default ModalWindow