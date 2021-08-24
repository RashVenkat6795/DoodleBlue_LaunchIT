import LoginConstant from '../constants/login';

const DEFAULT_STATE = {
   results : {},
}

export default function loginResult(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case LoginConstant.LOGINDATA:  
            return {
                ...state,
                results: {...action.payload}
            }
        default:
            return state
    }
}