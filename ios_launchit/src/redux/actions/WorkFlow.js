import WorkFlowConstant from '../constants/WorkFlow';

export function workFlowResult(data){
    return {
        type: WorkFlowConstant.WORKFLOW,
        payload: data
    }
}  