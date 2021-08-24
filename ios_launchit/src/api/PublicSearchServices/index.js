import request from '../core';
import {EndPoint} from '../endPoint'

export function getSearchByFolderRSN(lid,transactionCode,data) {
    return request({
        url: EndPoint.ExecuteCustomTransaction+'?lid='+lid+'&transactionCode='+transactionCode,
        method: 'POST',
        data : data
    });
};

export function getFolderByRSN(lid,folderRSN){
    return request({
        url: EndPoint.GetFolderByRSN+'?lid='+lid+'&folderRSN='+folderRSN,
        method: 'GET'
    })
}

export function getPublicSearchAPIresult(lid,transactionCode,data){
    return request({
        url: EndPoint.ExecuteCustomTransaction+'?lid='+lid+'&transactionCode='+transactionCode,
        method: 'POST',
        data : data
    })
}

export function getValidPeopleTitles(lid){
    return request({
        url: EndPoint.GetValidPeopleTitles+'?lid='+lid,
        method: 'GET'
    })
}

export function getValidStreetTypes(lid){
    return request({
        url: EndPoint.GetValidStreetTypes+'?lid='+lid,
        method: 'GET'
    })
}

export function getValidUnitTypes(lid){
    return request({
        url: EndPoint.GetUnitTypes+'?lid='+lid,
        method: 'GET'
    })
}

export function executeCustomTransaction(lid,transactionCode,data){
    return request({
        url: EndPoint.ExecuteCustomTransaction+'?lid='+lid+'&transactionCode='+transactionCode,
        method: 'POST',
        data : data
    })
}

export function getFolderSubByFolderType(lid,folderType){
    return request({
        url: EndPoint.GetFolderSubByFolderType+'?lid='+lid+'&folderType='+folderType,
        method: 'GET',
       
    })
}

export function getFolderWorkByFolderType(lid,folderType,subCode){
    return request({
        url: EndPoint.GetFolderWorkByFolderType+'?lid='+lid+'&folderType='+folderType+'&subCode='+subCode,
        method: 'GET',
       
    })
}