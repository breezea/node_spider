const { $http } = require('../../utils/services')


const defaultParams = {
    host_mid: 20259914,

}

const keyWords = ['奖','抽']
class upDynamic{
    data
    keyWords=keyWords
    constructor(){

    }
    async sendRequest(params){
        params = Object.assign(defaultParams, {...params,host_mid:params.mid})
        const res = await $http.get('polymer/web-dynamic/v1/feed/space',defaultParams)
        this.data = res.data.items

    }
    demo(index=0, show=true){
        show &&  console.log(this.data[index])
    }
    includeKeyWords(text){
        if (!text){
            return false
        }
        let flag = false
        this.keyWords.forEach(keyWord=>{
            if(text.includes(keyWord)){
                flag = true
            }
        })
        return flag
    }

    getDynamicText(...indexs){
        const res = indexs.map((index)=>{
            return this.data[index].modules.module_dynamic.desc.text
        })
        return res
    }
    latestDynamicText(){
        return this.getDynamicText(0) 
    }

    checkLottery(){
        const res = []
        this.data.map((item,index)=>{
            const text  = item.modules.module_dynamic.desc?.text
            if(this.includeKeyWords(text)){
                res.push({
                    index,
                    text
                })
            }
        })
        return res
    }

    latestIsLottery(){
        const text = this.data[0].modules.module_dynamic.desc?.text
        if(this.includeKeyWords(text)){
            return true, text
        }else{
            return false, 'NOT'
        }
    }
}
module.exports = new upDynamic()