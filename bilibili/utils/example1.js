const axios = require('axios')

class http{
    constructor(headers,baseURL=''){
        this.headers = headers || {'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74'}
        this.baseURL = baseURL
    }

    async get(url, data, headers,errBack){
        // 发起请求
        const res = await axios.get(this.baseURL+url,data,{...this.headers,...headers}).catch(err=>{
            // 请求失败
            errBack && errBack(err) 
        })
        // 请求成功
        if(res){ return { code: 200, res:res.data, } }
        // 请求失败
        else{ return { code: -1, res: '', } }
    }

    async post(url, data, headers, errBack){
        const res = await axios.post(this.baseURL+url,data,{...this.headers,...headers}).catch(err=>{
            errBack && errBack(err)
        })
        if(res){ return { code: 200, res:res.data, } }
        else{ return { code: -1, res: '', } }
    }
    async all(){
        console.log('并发请求')
    }

}

const $http = new http()
// $http.get()

async function test(){
    // const { code, res }  = await $http.get('http://www.ba112idu.com/')
    const { code, res }  = await $http.get('http://www.baidu.com/')

    code === 200 && console.log('res')

}

test()