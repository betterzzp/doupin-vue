import request from '@/util/request'
export function getShopCar(params) {
    return request({
        url:'/shopcar/getShopCar',
        method:'post'
    })
}
export function addToShopCar(param) {
    return request({
        url:'/shopcar/addToShopCar',
        method:'post',
        data:param
    })
}
export function getShopcarNumber(param) {
    return request({
        url:'/shopcar/getShopcarNumber',
        method:'post',
        data:param
    })
}
export function getShopCarList(param){
    return request({
        url:'/shopcar/getShopCarList',
        method:'post',
        data:param
    })
}

export function deleteShopcarMenu(param){
    return request({
        url:'/shopcar/deleteShopcarMenu/'+param,
        method:'post',
        data:param
    })
}

