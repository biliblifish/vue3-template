import request from '../utils/request';

export function getInfo() {
  return request({
    url: 'https://api.uomg.com/api/qq.info?qq=774740085',
    method: 'post',
  });
}

export function getLink(data) {
  return request({
    url: '',
    method: 'post',
    data,
  });
}
