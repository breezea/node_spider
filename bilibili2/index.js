// bilibili

// 请求
const {$http} = require('./utils/services')

async function tt(){

}
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
   
    // up的投稿空间
    // const upSpace = require('./src/upSpace')
    // const { upmid } = require('./src/upSpace/upInfo')

    // await upSpace.sendRequest({
    //     // mid: upmid['啊吗粽']
    //     mid: upmid['咻咻满']
    // })
    // // upSpace.videoDemo()
    // c = upSpace.getInfo(['coverUrl','author','link','title'],0)
    // // true && upSpace.openUrl(c[0].link)
    // console.log(c);

    // up的动态

    // const upDynamic = require('./src/dynamic/index.js')
    // await upDynamic.sendRequest()
    // texts = upDynamic.getDynamicText(0,1,2,3,4,5)
    // console.log(upDynamic.checkLottery())
    // console.log(upDynamic.latestIsLottery())
    // console.log(upDynamic.data)
    // console.log(upDynamic.latestDynamicText())
}

// main()

async function dynamic(){
    const queen = require('./utils/sleep/index')
    const {upmid} = require('./config/upmid')
    const upDynamic = require('./src/dynamic/index')

    for( key in upmid){
        await queen.sleep(1500)
        const mid = upmid[key]
        await upDynamic.sendRequest({mid})
        console.log(key, upDynamic.latestIsLottery())
    }

}

// dynamic()

function fpFunction(){
    const fp = require('./utils/file/index')
    fp.setBasePath('./data')
    fp.write('1.txt', 'hello wolrd', (err,res)=>{
        console.log(err, res)
    })

    fp.readFile('1.txt', encoding='utf8', (err, data)=>{
        console.log(err, data)
    })
}

fpFunction()
