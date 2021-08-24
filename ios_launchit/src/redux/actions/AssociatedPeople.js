import AssociatedPeopleConstant from '../constants/AssociatedPeople';

export function associatedPeopleResult(data){
    return {
        type: AssociatedPeopleConstant.ASSOCIATEDPEOPLE,
        payload: data
    }
}  