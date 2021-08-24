import request from '../core';
import {EndPoint} from '../endPoint'

export function getDashBoardData(data) {
    return request({
        url: EndPoint.GetDashBoard,
        method: 'PUT',
        data: data
    });
};
