import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as DashBoardActions from '../../../redux/actions/DashBoard';
import Component from "../Component";

const mapStateToProps = state => {
  return {login: state.login.results}
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(DashBoardActions, dispatch) }
}

export const Services = connect(mapStateToProps, mapDispatchToProps)(
  Component
);