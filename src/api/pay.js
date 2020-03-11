import request from '@/util/request'

export function payBill(param) {
    return request({
        url:'/pay/pay/',
        method:'post',
        data:param
    })
}
export function getPayOrders(param) {
    return request({
        url:'/pay/get/user/order',
        method:'post',
        data:param
    })
}