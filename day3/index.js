const http = require('./utils/http')
const $http = new http()
const config = require('./config')
const selector = require('./utils/cheerio')

// console.log(config)
let url = 'https://xk.jxnu.edu.cn/Step4/ChangeClass.aspx?kch=262105'
async function main(){
    const { code, res } = await $http.get(url,{
        headers:{...config.headers},
    }) 
    // 解析html
    const $ = new selector(res)
    let doms = $('#ctl00_chdContent_gvContent > tbody > tr:nth-child(4) > td:nth-child(6)')
    let leave = doms.text()
    // console.log(typeof(leave),leave.length)
    if (leave.includes('0')){
        console.log('linux不能选,容量0')
    }else{
        console.log('可以选',leave)
    }
    // console.log(`linux操作系统,张光河2班，剩余可选：${doms.text()}`)
}

// main()
setInterval(()=>{
    // 1分钟重新请求
    // randomImpact = Math.random()
    main()
},1000*60)

// console.log(Math.random())

// axios.get('https://xk.jxnu.edu.cn/Step4/ChangeClass.aspx?kch=262105',{
//     headers:{...headers}
// }).then(
//     res=>{
//         console.log(res.data)
//     },
//     err=>{
//         console.log('请求失败：')
//         console.log(err)
//     }
// )