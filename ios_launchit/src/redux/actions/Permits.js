import PermitsConstant from '../constants/Permits';

export function permitResults(data){
    return {
        type: PermitsConstant.PERMITSLIST,
        payload: data
    }
}  