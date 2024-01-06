import request from '@/utils/request'

export function getTableTestList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}
