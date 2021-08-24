import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PublicSearchActions from '../../../redux/actions/PublicSearch';
import PublicSearchComponent from "../Component/publicSearch";

const mapStateToProps = state => {
  return {
    publicsearch: state.PublicSearch.results,
    // publicsearchres: state.PublicSearch.results
  }
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(PublicSearchActions, dispatch) }
}

export const PublicSearch = connect(mapStateToProps, mapDispatchToProps)(
  PublicSearchComponent
);

