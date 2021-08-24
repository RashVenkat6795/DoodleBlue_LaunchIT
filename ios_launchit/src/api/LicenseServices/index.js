import request from '../core';
import {EndPoint} from '../endPoint'

export function executeCustomTransaction(lid,transactionCode,data){
    return request({
        url: EndPoint.ExecuteCustomTransaction+'?lid='+lid+'&transactionCode='+transactionCode,
        method: 'POST',
        data : data
    })
}

export function getFolderByRSN(lid, folderRSN) {
    return request({
        url: EndPoint.GetFolderByRSN+'?lid='+lid+'&folderRSN='+folderRSN,
        method: 'GET'
    })
}