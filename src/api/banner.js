import request from '@/util/request'
export function getBanner(params) {
    return request({
      url:'/render/banner',
      method:'post'
    })
  }