import PropertyDetailsConstant from '../constants/PropertyDetails';

const DEFAULT_STATE = {
   results : {},
}

export default function propertyDetailsResult(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case PropertyDetailsConstant.PROPERTYDETAILS:  
            return {
                ...state,
                results: {...action.payload}
            }
        default:
            return state
    }
}