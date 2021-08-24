import LoginConstant from '../constants/login';

export function loginResults(data){
    return {
        type: LoginConstant.LOGINDATA,
        payload: data
    }
}  