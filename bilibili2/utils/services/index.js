// axios 封装
const axios = require('axios')
const { config } = require('./config')


class Request {
    // axios实例
    instance
    // 拦截器对象
    interceptorsObj

    constructor(config){
        this.instance = axios.create(config)
        this.interceptorsObj = config.interceptors

        // 使用拦截器
        this.instance.interceptors.request.use(
            (res)=>{
                // console.log('请求拦截')
                return res
            },
            (err)=>{
                console.log(err)
            }
        )
        // 使用实例拦截器
        // if(this.interceptorsObj.requestInterceptors && this.interceptorsObj.requestInterceptorsCatch){
            this.instance.interceptors.request.use(
                this.interceptorsObj?.requestInterceptors,
                this.interceptorsObj?.requestInterceptorsCatch
            )
        // }
        this.instance.interceptors.response.use(
            this.interceptorsObj?.responseInterceptors,
            this.interceptorsObj?.responseInterceptorsCatch
        )
        this.instance.interceptors.response.use(
            (res)=>{
                return res.data
            },
            (err)=>{
                console.log(err)
            }
        )
    }

    request(config){
        return this.instance.request(config)
    }

    get(url, params){
        return this.instance.get(url, {params})
    }

    post(url, params){
        return this.instance.post(url, params)
    }

    put(url,params){
        return this.instance.post(url, params)
    }

    delete(url, params){
        return this.instance.delete(url, {params})
    }


}

// export default new Request(config)
// export const request = Request
module.exports = {
    $http: new Request(config),
    request: Request
}