import request from '@/util/request'

export function getMenuDetails (params) {
    return request({
        url:'/render/goodDetail/'+params,
        method:'post'
    })
}