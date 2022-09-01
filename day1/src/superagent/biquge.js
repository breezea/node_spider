const charset = require('superagent-charset');
const superagent = charset(require('superagent'));
const cheerio = require('cheerio');


let article_list = [] 

// let base_url = 'https://www.bbiquge.net/book/132488/'
let base_url = 'https://www.bilibili.com/'
// let base_url = 'https://www.bilibili.com/v/popular/all?spm_id_from=333.1007.0.0'

function getArticleList(res){
    console.log(res.text)
    // 设置编码
    let $ = cheerio.load(res.text)
    // 找到目标所在的页面数据
    let dom = ($('#i_cecream > div.bili-header.large-header > div.bili-header__channel > div.channel-icons > a:nth-child(2)'))

    dom.each(function(idx,ele){
        let article = {
            href: $(ele).attr('href')
        }
        article_list.push(article)
    }
    )
    console.log(article_list)
    // 找到目标所在的页面数据
    // console.log($)
}

headers ={'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74'}

superagent.get(base_url)
    .charset('utf-8')
    .set(headers)
    .buffer(true)
    .then((res)=>{
        console.log('request successful')
        getArticleList(res)
    }).catch((err)=>{
        console.log('request error')
        console.log(err)
    })
    // end((err,res)=>{
    // this.buffer(true)._parser = function(res,cb){
    //     console.log(res)
    //     console.log(cb)
    // }
    // console.log('123')
    // if(err){
    //     console.log('request error')
    // }else{
    //     console.log('request success')
    //     article_list = getArticleList(res)
        // console.log(article_list)
    // }