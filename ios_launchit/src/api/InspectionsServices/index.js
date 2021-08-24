import request from '../core';
import {EndPoint} from '../endPoint'

export function getMyInspectionsData(lid,transactionId,data) {
    return request({
        url: EndPoint.GetMyInspections+'?lid='+lid+'&transactionCode='+transactionId,
        method: 'POST',
        data : data
    });
};

export function postScheduleInspection(lid,transactionId,data) {
    return request({
        url: EndPoint.ScheduleInspection+'?lid='+lid+'&transactionCode='+transactionId,
        method: 'POST',
        data : data
    });
};
