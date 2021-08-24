import PermitsConstant from '../constants/Permits';

const DEFAULT_STATE = {
   results : {},
}

export default function permitResult(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case PermitsConstant.PERMITSLIST:  
            return {
                ...state,
                results: {...action.payload}
            }
        default:
            return state
    }
}