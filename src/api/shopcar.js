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