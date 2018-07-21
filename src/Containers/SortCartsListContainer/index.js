import Sort from '../../Components/SortCartsList'
import {connect} from "react-redux";
import {
  defaultSortAction,
  showSortTypeAction,
  sortToHighestAction,
  sortToLowestAction
} from "../../Actions";

const mapStateToProps = (state) => {
  return {
    Products: state.FilterReducer,
    SortType: state.SortType
  };
};

const mapDispatchToProps = {
  changeSortType: showSortTypeAction,
  sortToHighest: sortToHighestAction,
  sortToLowest: sortToLowestAction,
  defaultSort: defaultSortAction
};

const SortList = connect(mapStateToProps, mapDispatchToProps)(Sort);

export default SortList