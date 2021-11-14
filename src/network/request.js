import axios from 'axios'
export function request(config, success, failure) {
    // 创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 10000
    })
    // 请求拦截
    instance.interceptors.request.use(config => {
      return config
    }, err => {
      console.log(err);
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      console.log(err);
    })
    // 发送真正的网络请求
    // instance(config)
    // .then(res => {
    //     success(res);    
    // })
    // .catch(err => {
    //     failure(err)    
    // })
    return instance(config)  //instance本身返回值就是promise，直接返回
}