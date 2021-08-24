import InspectionsConstant from '../constants/Inspections';
import { combineReducers } from 'redux';

const DEFAULT_STATE = {
   results : {},
}

function inspectionsResults(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case InspectionsConstant.INSPECTIONSLIST:  
            return {
                ...state,
                results: [...action.payload]
            }
        default:
            return state
    }
}

function scheduledInspectionsResults(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case InspectionsConstant.SCHEDULEDINSPECTIONSLIST:  
            return {
                ...state,
                results: [...action.payload]
            }
        default:
            return state
    }
}

export default combineReducers({
    inspectionsResults,
    scheduledInspectionsResults
})