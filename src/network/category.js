import {request} from './request.js';

export function getCategory() {
  return request({
    url: '/category',
  })
}
export function getUpGoods(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
export function getDownGoods( miniWallkey,type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type,
    }
  })
}