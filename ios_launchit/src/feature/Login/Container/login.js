import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from '../../../redux/actions/login';
import LoginComponent from "../Component";

const mapStateToProps = state => {
  return {login: state.login}
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(LoginActions, dispatch) }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(
  LoginComponent
);