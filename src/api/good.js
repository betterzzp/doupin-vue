import request from '@/util/request'
export function getGoods(params) {
    return request({
        url:'/render/goods',
        method:'post'
    })
}