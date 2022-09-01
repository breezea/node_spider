const axios = require('axios')

class http{
    constructor(config={
        baseURL:'',
        timeout: 3000, 
        headers:{},
    },request=false,response=false){
        this.axios = axios.create(config)
        this.interceptors = {}
    }
    // 设置请求拦截器
    interceptors_request(success, failed){
        this.interceptors['request'] = this.axios.interceptors.request.use(success,failed)
    }
    // 移除请求拦截器
    interceptors_request_remove(){
        this.axios.interceptors.request.eject(this.interceptors['request'])
    }
    // 设置响应拦截器
    interceptors_response(success, failed){
        this.interceptors['response'] = this.axios.interceptors.response.use(success,failed)
    }
    // 移除响应拦截器
    interceptors_response_remove(){
        this.axios.interceptors.request.eject(this.interceptors['response'])
    }
    async get(url, config, errBack, ){
        // 发起请求
        const res = await this.axios.get(url,config).catch(err=>{
            errBack && errBack(err)
        })
        if( res ) return { code: 200, res:res.data, }
        else return { code: -1, res: {data:'', url: url, }}

    }

    async post(url, data, headers ,errBack){
        const res = await this.axios.post(url,data,headers).catch(err=>{
            errBack && errBack(err)
        })
        if(res) return { code: 200, res: res.data, }
        else return { code: -1, res: {data:'',url:url}}
    }
    
}

function request(){
    console.log(123)
}


module.exports = http
// const $http = new http(request=request)
// $http.interceptors_request(
//     (config)=>config,
//     (error)=>error
// )
// $http.interceptors_response(
//     (config)=>config,
//     (error)=>error
// )
// async function test(){
//     const { code ,res }  = await $http.get('http://www.baidu.com')
//     code === 200 && console.log('12',)
//     code === -1 && console.log('-1')
// }

// test()