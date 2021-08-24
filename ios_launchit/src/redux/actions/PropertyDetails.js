import PropertyDetailsConstant from '../constants/PropertyDetails';

export function propertyDetailsResult(data){
    return {
        type: PropertyDetailsConstant.PROPERTYDETAILS,
        payload: data
    }
}  