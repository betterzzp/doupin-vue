import request from '@/util/request'
export function getUserAddress(params) {
    return request({
      url:'/address/getUserAddress',
      method:'post'
    })
  }

  export function addAddress(params) {
    return request({
      url:'/address/addAddress',
      method:'post',
      data:params
    })
  }

  export function setDefaultAddress(params) {
    return request({
      url:'/address/setDefaultAddress/'+params,
      method:'post'
    })
  }

