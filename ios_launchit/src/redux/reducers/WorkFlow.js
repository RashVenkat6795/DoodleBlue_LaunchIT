import WorkFlowConstant from '../constants/WorkFlow';

const DEFAULT_STATE = {
   results : {},
}

export default function workFlowResult(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case WorkFlowConstant.WORKFLOW:  
            return {
                ...state,
                results: [...action.payload]
            }
        default:
            return state
    }
}