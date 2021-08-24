import request from '../core';
import {EndPoint} from '../endPoint';

export function getPeople(lid,peopleRSN){
    return request({
        url : EndPoint.GetPeople+'?lid='+lid+'&peopleRSN='+peopleRSN,
        method :'GET'
    });
};

export function getValidPeopleTitles(lid){
    return request({
        url : EndPoint.GetValidPeopleTitles+'?lid='+lid,
        method:'GET',
    });
};

export function getValidStreetTypes(lid){
    return request({
        url : EndPoint.GetValidStreetTypes+'?lid='+lid,
        method:'GET',
    });
};

export function getValidUnitTypes(lid){
    return request({
        url : EndPoint.GetUnitTypes+'?lid='+lid,
        method:'GET',
    });
};

export function getValidCity(lid){
    return request({
        url : EndPoint.GetValidCity+'?lid='+lid,
        method:'GET',    
    });
};

export function getValidProvinces(lid){
    return request({
        url : EndPoint.GetValidProvinces+'?lid='+lid,
        method:'GET',    
    });
};


export function getValidPhoneTypes(lid){
    return request({
        url : EndPoint.GetValidPhoneTypes+'?lid='+lid,
        method:'GET',    
    });
};

export function getValidStreetDirections(lid){
    return request({
        url : EndPoint.GetValidStreetDirections+'?lid='+lid,
        method : 'GET',
    });
};

export function getValidSecurityQuestions(lid){
    return request({
        url : EndPoint.GetValidSecurityQuestions+'?lid='+lid,
        method : 'GET',
    });
};

export function updatePeople(lid,peopleData){
 
    return request({
        url : EndPoint.UpdatePeople+'?lid='+lid,
        method : 'POST',
        data : peopleData

    });
};

export function updatePassword(lid,RSN,password){
    return request({
        url : EndPoint.changePassword+'?lid='+lid+'&peopleRSN='+RSN+'&internetPassword='+password,
        method : 'POST',
    });
};