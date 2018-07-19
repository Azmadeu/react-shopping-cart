import Sort from '../../Components/SortCartsList'
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    PanelsVisibility: state.PanelsVisibility,
    Basket: state.Basket,
    Counter: state.Counter,
    Products: state.FilterReducer
  };
};



const SortList = connect(mapStateToProps, null)(Sort);

export default SortList