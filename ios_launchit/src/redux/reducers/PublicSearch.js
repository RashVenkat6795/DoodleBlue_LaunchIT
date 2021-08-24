import PublicSearchConstant from '../constants/PublicSearch';

const DEFAULT_STATE = {
   results : {},
}

export default function folderrsnsearchresult(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case PublicSearchConstant.FOLDERRSNSEARCHLIST:  
            return {
                ...state,
                results: [...action.payload]
            }
        default:
            return state
    }
}
