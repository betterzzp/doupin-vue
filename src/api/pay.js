import request from '@/util/request'

export function payBill(param) {
    return request({
        url:'/pay/pay/',
        method:'post',
        data:param
    })
}