import request from '@/util/request'

export function payBill() {
    return request({
        url:'/pay/pay/',
        method:'post'
    })
}