const superagent = require('superagent');
const cheerio = require('cheerio');

let hotNews = []
let localNews = []

function getHotNews(res){
    // res 是请求返回的数据包
    console.log('getHotNews')
    let hotNews = []
    let $ = cheerio.load(res.text)
    // 找到目标所在的页面数据
    $('div#pane-news ul li a').each(function(idx,ele){
        let news = {
            title: $(ele).text(),
            href: $(ele).attr('href')
        }
        hotNews.push(news)
    })
    return hotNews
}

superagent.get('http://news.baidu.com/').end((err,res)=>{
    if(err){
        console.log('request error')
    }else{
        console.log('reuqest success')
        // 访问成功时，解析数据
        // console.log(res.text)
        hotNews = getHotNews(res)
        console.log(hotNews)
    }
})



