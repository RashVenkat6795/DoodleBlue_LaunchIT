import request from '../core';
import {EndPoint} from '../endPoint';

export function login(data) {
  return request({
    url: EndPoint.Login,
    method: 'POST',
    data: data,
  });
}

export function boLogin(data) {
  return request({
    url: EndPoint.BoLogin,
    method: 'POST',
    data: data,
  });
}

export function register(data,lid) {
  return request({
    url: EndPoint.Register+'?lid='+lid,
    method: 'POST',
    data: data,
  });
}
