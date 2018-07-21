import Window from '../../Components/ModalWindow'
import {connect} from "react-redux";
import {
  removeCartAction,
  decProductAction
} from "../../Actions/index";

const mapStateToProps = (state) => {
  return {
    Basket: state.Basket,
  };
};

// const mapDispatchToProps = {
//   removeCart: removeCartAction,
//   decrement: decProductAction
// };


const ModalWindow = connect(mapStateToProps, null)(Window);

export default ModalWindow