import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PermitsActions from '../../../redux/actions/Permits';
import * as PlumbingPermitActions from '../../../redux/actions/PlumbingPermit';
import * as PropertyDetailsActions from '../../../redux/actions/PropertyDetails';
import * as AssociatedPeopleActions from '../../../redux/actions/AssociatedPeople';
import * as WorkFlowActions from '../../../redux/actions/WorkFlow';
import PermitsComponent from "../Component";
import PlumbingPermitComponent from '../Component/plumbingPermit'
import DetailsComponent from '../Component/details'
import PropertyDetailsComponent from '../Component/propertyDetails'
import AssociatedPeopleComponent from '../Component/associatedPeople'
import WorkFlowComponent from '../Component/workFlow'
import AddAttachementsListComponent from '../Component/AddAttachementsList'
import FeesAndPaymentsComponent from '../Component/feesAndPayments'


const mapStateToProps1 = state => {
  return {permits: state.Permits.results}
};

const mapDispatchToProps1 = (dispatch) => {
  return { actions: bindActionCreators(PermitsActions, dispatch) }
}

export const Permits = connect(mapStateToProps1, mapDispatchToProps1)(
  PermitsComponent
);

const mapStateToProps2 = state => {
  return {permits: state.Permits.results}
};

const mapDispatchToProps2 = (dispatch) => {
  return { actions: bindActionCreators(PlumbingPermitActions, dispatch) }
}

export const PlumbingPermit = connect(mapStateToProps2, mapDispatchToProps2)(
  PlumbingPermitComponent
);

const mapStateToProps3 = state => {
  return {permits: state.Permits.results}
};

const mapDispatchToProps3 = (dispatch) => {
  return { actions: bindActionCreators(PlumbingPermitActions, dispatch) }
}

export const Details = connect(mapStateToProps3, mapDispatchToProps3)(
  DetailsComponent
);

const mapStateToProps4 = state => {
  return {propertyDetails: state.PropertyDetails.results}
};

const mapDispatchToProps4 = (dispatch) => {
  return { actions: bindActionCreators(PropertyDetailsActions, dispatch) }
}

export const PropertyDetails = connect(mapStateToProps4, mapDispatchToProps4)(
  PropertyDetailsComponent
);

const mapStateToProps5 = state => {
  return {associatedPeople: state.AssociatedPeople.results}
};

const mapDispatchToProps5 = (dispatch) => {
  return { actions: bindActionCreators(AssociatedPeopleActions, dispatch) }
}

export const AssociatedPeople = connect(mapStateToProps5, mapDispatchToProps5)(
  AssociatedPeopleComponent
);

const mapStateToProps6 = state => {
  return {workFlow: state.WorkFlow.results}
};

const mapDispatchToProps6 = (dispatch) => {
  return { actions: bindActionCreators(WorkFlowActions, dispatch) }
}

export const WorkFlow = connect(mapStateToProps6, mapDispatchToProps6)(
  WorkFlowComponent
);

const mapStateToProps7 = state => {
  return {associatedPeople: state.AssociatedPeople.results}
};

const mapDispatchToProps7 = (dispatch) => {
  return { actions: bindActionCreators(AssociatedPeopleActions, dispatch) }
}

export const AddAttachementsList = connect(mapStateToProps7, mapDispatchToProps7)(
  AddAttachementsListComponent
);

const mapStateToProps8 = state => {
  return {associatedPeople: state.AssociatedPeople.results}
};

const mapDispatchToProps8 = (dispatch) => {
  return { actions: bindActionCreators(AssociatedPeopleActions, dispatch) }
}

export const FeesAndPayments = connect(mapStateToProps8, mapDispatchToProps8)(
  FeesAndPaymentsComponent
);
