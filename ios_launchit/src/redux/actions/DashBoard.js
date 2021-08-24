import DashBoardConstant from '../constants/DashBoard';

export function dashBoardResults(data){
    return {
        type: DashBoardConstant.DASHBOARDLIST,
        payload: data
    }
}  