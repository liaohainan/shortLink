import axios from 'axios'
import qs from 'qs'

let config = {
    baseURL: 'http://127.0.0.1:3000/api',
    timeout: 10000,
    // `headers`选项是需要被发送的自定义请求头信息
    // headers: {
    //     'X-Requested-With': 'XMLHttpRequest'
    // },
    // transformRequest: [function (data) {
    //     //需要序列化数据，数据放到formdata
    //     return qs.stringify(data)
    // }]
}
axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://127.0.0.1:3000/api'
export const api_get = (option) => {
    /*
    *params
    *   url: ajax的url地址
    *  data: ajax的请求数据
    *callback:事件回调
    */
    console.log(option)
    console.log(config)
    let {url, data = {}} = option
    return axios.get(url, { params: data }, config).then(response => {
        
        if (response.status === 200) {
        return response.data
        }
    }).catch((response) => {
        console.log()
    })
}
export const api_post = (option) => {
    /*
    *params
    *   url: ajax的url地址
    *  data: ajax的请求数据
    *  type：传递数据的类型，json为默认，可以是file
    *callback:事件回调
    */
    let {url, data = {}} = option
    return axios.post(url, data, config).then((response) => {
        if (response.status == 200) {
            return response.data
        }
    }).catch((response) => {

    })
}
