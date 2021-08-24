import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as InspectionsActions from '../../../redux/actions/Inspections';
import InspectionsComponent from '../Component/inspection'
import ScheduleInspectionsComponent from '../Component/scheduleInspections'

const mapStateToProps = state => { console.log("map state", state)
    return {
      inspection: state.Inspections.inspectionsResults.results,
      scheduledInspection: state.Inspections.scheduledInspectionsResults.results
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(InspectionsActions, dispatch) }
  }
  
  export const Inspections = connect(mapStateToProps, mapDispatchToProps)(
    InspectionsComponent
  );

  export const ScheduleInspections = connect(mapStateToProps, mapDispatchToProps)(
    ScheduleInspectionsComponent
  );