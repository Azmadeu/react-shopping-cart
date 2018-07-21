import {connect} from "react-redux";
import Filter from '../../Components/filterBar'
import {
  defaultSortAction,
  filterAction,
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
  Filter: filterAction,
  sortToHighest: sortToHighestAction,
  sortToLowest: sortToLowestAction,
  defaultSort: defaultSortAction
};

const FilterBar = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterBar