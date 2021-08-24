import { combineReducers } from 'redux';
import login from './login'
import DashBoard from './DashBoard'
import PlumbingPermit from './PlumbingPermit'
import PropertyDetails from './PropertyDetails'
import AssociatedPeople from './AssociatedPeople'
import WorkFlow from './WorkFlow'
import Inspections from './Inspections'
import PublicSearch from './PublicSearch'

export default combineReducers({
    login,
    DashBoard,
    PlumbingPermit,
    PropertyDetails,
    AssociatedPeople,
    WorkFlow,
    Inspections,
    PublicSearch
}); 