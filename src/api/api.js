import request from '../service/http'
export function getCity(){
  return request({
    url: `/v1/cities?type=guess`,
    method: 'get',
    })
}

