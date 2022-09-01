const fetch = require('./export')
const spider = new fetch();
console.log(spider.headers)
const base_url = 'http://www.baidu.com'
// const url = 'https://www.bbiquge.net/book/132488/'
const url = 'https://www.bilibili.com/v/popular/all'

async function main(){
    let res = await spider.get(url)
    // doms = res.select('div#app > div > .card-list')
    doms = res.select('#app > div > div.popular-video-container.popular-list > div > ul')

    // 将文件保存下来
    console.log(doms.length)
}

main()
// const home_page =new spider.test(base_url)
// const home_page =new spider.test(url)
// const home_page = new (spider.tt(url))
// const bili = spider.test(url)
// new home_page()
// console.log(home_page)
// console.log(bili.url)
// console.log(selector('div'))
// const selector = spider.get(base_url)

// console.log(typeof(selector))
// console.log(selector('div'))
// console.log(res('div').length)
// res.then(res=>{
//     console.log(res)
// }).catch(
//     err=>{
//         console.log(err)
//     }
// )
// console.log(res)
// res.then(res => {
//     console.log(res.text)    
//     },
// ).catch(err => {
//     console.log(err)
// })

// axios.get(local_url).then(
//     res=>{
//         console.log('ok')
//         console.log(res.data)
//     },
//     err=>{
//         console.log("error")
//         console.log(err)
//     }

// const res = axios.get(local_url)
// console.log(res)
// res.then(
//     res=>console.log('res'),
//     err=>console.log('err')
// )
