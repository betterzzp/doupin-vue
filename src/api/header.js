import request from '@/util/request'
export function sendMsg(params) {
    return request({
        url:'/user/sendMsg/'+params,
        method:'post'
    })
}

export function loginWithValidatecode (params) {
    return request({
        url:'/user/login/validate',
        contentT:"",
        method:'post',
        data:params
    })
}