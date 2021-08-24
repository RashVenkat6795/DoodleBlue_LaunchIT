import PlumingPermitConstant from '../constants/PlumbingPermit';

const DEFAULT_STATE = {
    results : {},
 }
 
 export default function plumbingPermitResult(state = DEFAULT_STATE, action) {
     switch (action.type) {
         case PlumingPermitConstant.PLUMBINGPERMITSLIST:  
             return {
                 ...state,
                 results: {...action.payload}
             }
         default:
             return state
     }
 }