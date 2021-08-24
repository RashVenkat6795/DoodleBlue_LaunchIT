import InspectionsConstant from '../constants/Inspections';

export function inspectionsResults(data){
    return {
        type: InspectionsConstant.INSPECTIONSLIST,
        payload: data
    }
}

export function scheduledInspectionsResults(data){
    return {
        type: InspectionsConstant.SCHEDULEDINSPECTIONSLIST,
        payload: data
    }
}