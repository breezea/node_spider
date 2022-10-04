
const { $http } = require('../../utils/services')
const bilibili = require('../bilibili')

// space/arc/search?mid=37754047&ps=30&tid=0&pn=1&keyword=&order=pubdate& order_avoided=true&jsonp=jsonp

// c.exec('start http://www.baidu.com');
defaultParams = {
    // 这个是咻的mid
    mid: 37754047,
    ps: 30,
    pn: 1,
    tid: 0,
    keyword:'',
    order: 'pubdate',
    order_avoided: true,
    jsonp: 'jsonp',
}

class UpSpace extends bilibili{
    data
    videoInfo
    constructor(params){
        super()
    }
    // openUrl(url){
    //     c.exec('start '+url)
    // }
    async sendRequest(params){
        params = Object.assign(defaultParams, params)
        const res = await $http.get('space/arc/search',params)
        this.videoInfo = res.data.list.vlist
    }

    videoDemo(index=0,show=true){
        show && console.log(this.videoInfo[index])
        return this.videoDemo[index]
    }
    getInfo(keys, ...indexs){
        keys = this.makeKeys(keys)
        const res = indexs.map((index)=>{
            let c_res={}
            keys.forEach(key=>{
                // 拼接地址
                if(key === 'bvid'){
                    c_res['link'] = `https://www.bilibili.com/video/${this.videoInfo[index][key]}`
                }else{
                    c_res[key] = this.videoInfo[index][key]
                }
            })
            return c_res
        })
        return res

    }
    makeKeys(keys){
        return keys.map(key=>{
            if(key === 'coverUrl'){
                return 'pic'
            }else if(key==='link'){
                return 'bvid'
            }
            else{
                return key
            }
        })
    }
    
}

module.exports = new UpSpace()