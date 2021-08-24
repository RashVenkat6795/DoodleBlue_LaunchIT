import DashBoardConstant from '../constants/DashBoard';

const DEFAULT_STATE = {
   results : {}
}

export default function dashBoardResult(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case DashBoardConstant.DASHBOARDLIST:  
            return {
                ...state,
                results: {...action.payload}
            }
        default:
            return state
    }
}