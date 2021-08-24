import PlumingPermitConstant from '../constants/PlumbingPermit';

export function plumbingPermitResults(data){
    return {
        type: PlumingPermitConstant.PLUMBINGPERMITSLIST,
        payload: data
    }
}  