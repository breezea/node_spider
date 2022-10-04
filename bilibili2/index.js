// bilibili

// 请求
// const {$http} = require('./utils/services')

// 解析
// const selector = require('./utils/cheerio')
// 文件
// const fp = require('./utils/file')
// sleep
// const queen = require('./utils/sleep')

// 实例化文件写入对象
// const $fp = new fp('./output/txt')

// 入口函数
async function main(){
    console.log('spider bilibili2')
    // const hotPage = require('./src/hotPage/index')
    // await hotPage.sendRequest()
    // let c = hotPage.getInfo(['title','coverUrl','owner','link'], 30)
    // console.log(c);
    // hotPage.demo()
    // console.log(hotPage.owner(0))
    
    const upSpace = require('./src/upSpace')
    const { upmid } = require('./src/upSpace/upInfo')
    // const { upmid }  = require('./src/upSpace/upInfo.js')

    await upSpace.sendRequest({
        // mid: upmid['啊吗粽']
        mid: upmid['咻咻满']
    })
    // upSpace.videoDemo()
    c = upSpace.getInfo(['coverUrl','author','link','title'],0)
    // true && upSpace.openUrl(c[0].link)
    console.log(c);
    
}
const a = require('./src/bilibili')

main()

