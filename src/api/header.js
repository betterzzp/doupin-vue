import request from '@/util/request'
export function sendMsg(params) {
    return request({
        url:'/user/sendMsg/'+params,
        method:'post'
    })
}

export function loginwithPassword (params) {
    return request({
        url:'/user/login/loginwithPassword',
        contentT:"",
        method:'post',
        data:params
    })
}

export function loginwithValidate (params) {
    return request({
        url:'/user/login/loginwithvalidatecode',
        contentT:"",
        method:'post',
        data:params
    })
}