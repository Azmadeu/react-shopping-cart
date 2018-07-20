import {connect} from "react-redux";
import Filter from '../../Components/filterBar'
import {
  filterAction
} from "../../Actions";


const mapStateToProps = (state) => {
  return {
    Products: state.FilterReducer,
  };
};

const mapDispatchToProps = {
  Filter: filterAction,
};

const FilterBar = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterBar