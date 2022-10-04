// bilibili热门信息

const { $http } = require('../../utils/services')

class HotPage{
    data
    constructor(ps=40, pn=1){
    }
    async sendRequest(ps=40, pn=1){
        const res = await $http.get(`/web-interface/popular?ps=${ps}&${pn}`)
        this.data = res.data.list
    }
    demo(){
        console.log(this.data[0])
    }
    // 获取内容信息
    getInfo(keys,...indexs){

        keys = this.makeKeys(keys)
        return indexs.map((index)=>{
            let c_res = {}
            keys.forEach(key=>{
                c_res[key] = this.data[index][key]
            })
            return c_res
        })
    }
    // keys的转换
    makeKeys(keys){
        return keys.map(key=>{
            if (key==='coverUrl'){
                return 'pic'
            }else if(key === 'link'){
                return 'short_link'
            }
            else{
                return key
            }
        })
    }
    owner(...indexs){
        return indexs.map((index)=>{
            return this.data[index].owner
        })
    }

}

// async function main(ps=40,pn=1){
//     console.log('request hot page')
//     // const res = await $http.get('/popular?ps=40&pn=1')
//     const res = await $http.get('/popular?ps=40&pn=1')
//     return res.data.list
// }

module.exports = new HotPage()