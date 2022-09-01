const charset = require('superagent-charset')
const superagent = charset(require('superagent'))
const cheerio = require('cheerio')
const axios = require('axios')

class spider{
    constructor(headers){
        this.headers = headers || {'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74'}
    }

    // async get(url,charset='utf-8',buffer=true){
    //     let res = await superagent.get(url)
    //         .charset(charset)
    //         .set(this.headers)
    //         .buffer(buffer)
    //     return res
    // }
    async get(url){
        const { data,} = await axios.get(url,{headers:this.headers})
        console.log(data)
        let $ = cheerio.load(data)
        return {
                data,
                select:cheerio.load(data)
        }
    }
    async test(url){
        const { data } = await axios.get(url,{headers:this.headers})
        return data 
    }
    
}

module.exports = spider