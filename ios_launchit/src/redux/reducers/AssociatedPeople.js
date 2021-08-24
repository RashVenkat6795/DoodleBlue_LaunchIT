import AssociatedPeopleConstant from '../constants/AssociatedPeople';

const DEFAULT_STATE = {
   results : {},
}

export default function associatedPeopleResult(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case AssociatedPeopleConstant.ASSOCIATEDPEOPLE:
            return {
                ...state,
                results: [...action.payload]
            }
        default:
            return state
    }
}